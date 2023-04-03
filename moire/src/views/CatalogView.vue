<script setup>
import { useRoute } from 'vue-router';
import ProductFilter from '../components/filter/FilterForm.vue';
import PageLoader from '../components/PageLoader.vue';
import ProductList from '../components/catalog/CatalogList.vue';
import ProductsPagination from '../components/catalog/CatalogPagination.vue';
import ServerApi from '../helpers/server-api';
import { ref, computed, reactive, watch } from 'vue';

const loading = ref(true); // индикатор загрузки
const products = ref({}); // список продуктов
const limit = ref(12); // лимит по умолчанию
const pagination = reactive({
  page: 1,
  pages: 1,
  total: 0,
});

const route = useRoute();

// Следим за изменениями строки запроса
watch(() => {
  return { params: route.params, query: route.query };
}, loadProducts);

loadProducts(); // Запрос к серверу

function loadProducts() {
  // если путь содержит limit и page
  if (route.params.limit && route.params.page) {
    limit.value = parseInt(route.params.limit);
    pagination.page = parseInt(route.params.page);
  }

  //запрос продуктов и пагинации
  ServerApi.getProducts({ page: pagination.page, limit: limit.value }, route.query).then(
    (response) => {
      console.log(response);
      loading.value = true;
      products.value = response.items;

      Object.assign(pagination, response.pagination);

      loading.value = false;
    }
  );
}

// Строка с количеством товаров
const productsCountString = computed(() => {
  const count = pagination.total % 100;
  let s = '';

  if (count >= 10 && count <= 20) {
    s = 'товаров';
  } else if (count % 10 === 1) {
    s = 'товар';
  } else if (count % 10 > 1 && count % 10 < 5) {
    s = 'товара';
  } else {
    s = 'товаров';
  }

  const result = `${count} ${s}`;
  return result;
});
</script>
<template>
  <PageLoader v-if="loading" />
  <main v-if="!loading" class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> {{ productsCountString }}</span>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter />
      <section class="catalog">
        <ProductList :products="products" />
        <ProductsPagination
          :page="pagination.page"
          :count="pagination.pages"
          :perPage="limit"
          @pagination="
            $router.push({
              name: 'products:limit',
              params: { limit: limit, page: $event },
            })
          "
        />
      </section>
    </div>
  </main>
</template>

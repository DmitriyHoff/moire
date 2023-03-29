<script setup>
import { useRoute, useRouter } from 'vue-router';
import ProductFilter from '../components/filter/FilterForm.vue';
import PageLoader from '../components/PageLoader.vue';
import ProductList from '../components/ProductList.vue';
import ProductsPagination from '../components/ProductsPagination.vue';
import ServerApi from '../ServerApi';
import { ref, computed, reactive, watch } from 'vue';

const loading = ref(true); // индикатор загрузки
const products = ref({}); // список продуктов
const pagination = reactive({
  page: 1,
  pages: 12,
  total: 0,
});

//const limit = ref(12); // лимит по умолчанию
//const currentPage = ref(1); // текущая страница

const router = useRouter();
const route = useRoute();
watch(
  () => route.params,
  () => loadProducts()
);
loadProducts(); // Запрос к серверу

function loadProducts() {
  // если путь содержит limit и page
  if (route.params.limit && route.params.page) {
    pagination.limit = parseInt(route.params.limit);
    pagination.page = parseInt(route.params.page);
  }

  //запрос продуктов и пагинации
  ServerApi.getProducts({ page: pagination.page, limit: pagination.limit }).then((response) => {
    loading.value = true;
    products.value = response.items;
    //    pagination = response.pagination;
    Object.assign(pagination, response.pagination);
    if (route.params.page !== pagination.page) {
      router.replace({
        to: 'products:limit',
        params: { limit: pagination.limit, page: pagination.page },
      });
    }
    loading.value = false;
  });
}

// Строка с количеством товаров
const productsCountString = computed(() => {
  const count = products.value.length % 100;
  let s = '';

  if (count >= 10 && count <= 20) {
    s = 'товаров';
  } else if (count % 10 === 1) {
    // s = 'товар';
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
          :perPage="pagination.limit"
          @pagination="
            {
              $router.push({
                to: 'products:limit',
                params: { limit: pagination.limit, page: $event },
              });
            }
          "
        />
      </section>
    </div>
  </main>
</template>

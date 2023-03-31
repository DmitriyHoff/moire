<script setup>
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import ProductColors from '../components/product/ProductColors.vue';
import ProductGallery from '../components/product/ProductGallery.vue';
import ProductInfo from '../components/product/ProductInfo.vue';
import ServerApi from '../ServerApi';
import SizeSelect from '../components/product/ProductSizeSelect.vue';
import SKU from '../helpers/sku-generator';

import { useCounterStore } from '../stores/counter';

import { ref } from 'vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import PageLoader from '../components/PageLoader.vue';

const store = useCounterStore();
const loading = ref(true);
const product = ref({});
const selectedSize = ref();
const selectedColor = ref();
const sku = computed(() => {
  if (product.value && selectedColor.value && selectedSize.value) {
    return new SKU({ id: product.value.id, color: selectedColor.value, size: selectedSize.value });
  } else return '';
});
const breadcrumbs = ref([]);
const route = useRoute();
const emit = defineEmits(['loadingStart', 'loadingComplete']);
const colors = computed(function () {
  return product.value.colors || [];
});
load();

async function load() {
  loading.value = true;
  emit('loadingStart');
  product.value = await ServerApi.getProductById(route.params.id);
  breadcrumbs.value = [
    { title: 'Каталог', route: { name: 'main' } },
    {
      title: product.value.category.title,
      route: { name: 'products', query: { categoryId: product.value.category.id } },
    },
    {
      title: product.value.title,
      route: { path: '#' },
    },
  ];
  selectedSize.value = product.value.sizes[0].id;
  selectedColor.value = product.value.colors[0].color.id;
  loading.value = false;
  emit('loadingComplete');
}
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail :links="breadcrumbs" />
    </div>
    <PageLoader v-if="loading" />
    <section v-if="!loading" class="item">
      <ProductGallery :colors="colors" :selected="selectedColor" :loading="loading" />
      <div class="item__info">
        <span class="item__code">Артикул: {{ sku }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg v-svg symbol="icon-minus" size="0 0 12 12"></svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg v-svg symbol="icon-plus" size="0 0 12 12"></svg>
                </button>
              </div>

              <b class="item__price"> {{ product.price }} ₽ </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ProductColors :colors="colors" v-model="selectedColor" />
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label class="form__label form__label--small form__label--select">
                  <SizeSelect :size-list="product.sizes" v-model="selectedSize" />
                </label>
              </fieldset>
            </div>

            <button
              class="item__button button button--primery"
              type="submit"
              @click.prevent="store.increment()"
            >
              В корзину
            </button>
          </form>
        </div>
      </div>

      <ProductInfo />
    </section>
  </main>
</template>

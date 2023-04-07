<script setup>
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import ProductColors from '../components/product/ProductColors.vue';
import ProductGallery from '../components/product/ProductGallery.vue';
import ProductInfo from '../components/product/ProductInfo.vue';
import SizeSelect from '../components/product/ProductSizeSelect.vue';
import ProductCounter from '../components/product/ProductCounter.vue';
import PageLoader from '../components/PageLoader.vue';

import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useCartStore } from '../stores/counter';
import toSkuString from '../helpers/sku-generator';
import ServerApi from '../helpers/server-api';

const route = useRoute();

const store = useCartStore();
const loading = ref(true);
const product = ref({});
const selectedSize = ref();
const selectedColor = ref();
const amount = ref(1);
const addWaiting = ref(false);
const sku = computed(() => {
  if (product.value && selectedColor.value && selectedSize.value) {
    return toSkuString({
      id: product.value.id,
      color: selectedColor.value,
      size: selectedSize.value,
    });
  } else return '';
});
const breadcrumbs = ref([]);

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
      route: {
        name: 'products',
        query: { categoryId: product.value.category.id },
        meta: { title: product.value.category.title },
      },
    },
    {
      title: product.value.title,
      route: { path: '#' },
    },
  ];
  selectedSize.value = product.value.sizes[0].id;
  selectedColor.value = product.value.colors[0].id;

  route.meta.title = product.value.title;
  document.title = route.meta.title;
  loading.value = false;
  emit('loadingComplete');
}
function addProduct() {
  addWaiting.value = true;
  ServerApi.addProductToBasket(
    {
      productId: product.value.id,
      colorId: getSubColorId(selectedColor.value),
      sizeId: selectedSize.value,
      quantity: amount.value,
    },
    store.getUser()?.accessKey
  ).then((result) => {
    console.log(result);
    Object.assign(store.cart, result);
    store.setUser(store.cart.user);
    addWaiting.value = false;
  });
}

/** Вовращает идентийикатор цвета */
function getSubColorId(colorId) {
  return colors.value.find((element) => element.id === colorId).color.id;
}
</script>
<template>
  <main class="content container">
    <div v-if="!loading" class="content__top">
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
              <ProductCounter v-model="amount" />

              <b class="item__price"> {{ $format.currRUB(product.price * amount) }} </b>
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
              :class="addWaiting ? 'button--loading' : ''"
              type="submit"
              @click.prevent="addProduct"
            >
              <span class="button__text">В корзину</span>
            </button>
          </form>
        </div>
      </div>

      <ProductInfo />
    </section>
  </main>
</template>

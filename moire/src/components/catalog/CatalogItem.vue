<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref, watch } from 'vue';
import ProductColors from '../product/ProductColors.vue';
import noimgUrl from '../../assets/no-image.svg';
import ServerApi from '../../helpers/server-api';
import { useCartStore } from '../../stores/counter';
import ProductSizeSelect from '../product/ProductSizeSelect.vue';
const props = defineProps(['product']);
const router = useRouter();
const selectedIndex = ref(0);
const selectedColor = ref(props.product.colors[0].id);
const selectedSize = ref();
const addWaiting = ref(false);
const productSizes = ref({});
const isAddToCart = ref(false);
const infoLoaded = ref(false);
const store = useCartStore();
watch(
  () => selectedColor.value,
  () => {
    console.log(props.product);
    selectedIndex.value = props.product.colors.findIndex((x) => x.id === selectedColor.value);
  }
);
const imageLoaded = ref(false);
function onImageLoaded() {
  imageLoaded.value = true;
}

function setImageSrc(gallery) {
  if (!gallery) {
    return noimgUrl;
  } else {
    return gallery[0]?.file.url;
  }
}

// Добавляет продукт в корзину
function addProduct() {
  if (isAddToCart.value) router.push({ name: 'cart' });
  addWaiting.value = true;
  ServerApi.addProductToBasket(
    {
      productId: props.product.id,
      colorId: getSubColorId(selectedColor.value),
      sizeId: selectedSize.value,
      quantity: 1,
    },
    store.getUser()?.accessKey
  ).then((result) => {
    console.log(result);
    setTimeout(() => {
      Object.assign(store.cart, result);
      store.setUser(store.cart.user);
      addWaiting.value = false;

      isAddToCart.value = true;
    }, 1000);
  });
}

// загружает дополнительную информацию о продукте
function loadProductInfo() {
  if (infoLoaded.value) return;
  ServerApi.getProductById(props.product.id).then((response) => {
    productSizes.value = response.sizes;
    selectedSize.value = productSizes.value[0].id;
    infoLoaded.value = true;
  });
}
/** Вовращает идентийикатор цвета */
function getSubColorId(colorId) {
  return props.product.colors.find((element) => element.id === colorId).color.id;
}
</script>
<template>
  <li class="catalog__item" @mouseover="loadProductInfo">
    <RouterLink
      class="catalog__pic"
      :to="{
        name: 'product',
        params: { id: product.id },
        meta: { data: product.title },
      }"
    >
      <div class="catalog__pics-wrapper">
        <img
          v-for="(color, index) in product.colors"
          :key="color.id"
          :src="setImageSrc(product.colors[selectedIndex].gallery)"
          :alt="product.title"
          :hidden="selectedIndex !== index"
          @load="onImageLoaded"
        />
      </div>
      <div class="catalog__item-cartbox"></div>
      <div class="catalog__size-box" @click.prevent="">
        <label class="form__label form__label--small form__label--select">
          <ProductSizeSelect :size-list="productSizes" v-model="selectedSize" />
        </label>
        <button
          class="catalog__button button button--primery"
          :class="{ 'button--loading': addWaiting, 'button--ok': isAddToCart }"
          @click.prevent="addProduct"
        >
          <span class="button__text">
            <svg v-svg symbol="icon-cart" size="19 24"></svg>
          </span>
        </button>
      </div>

      <div v-show="!imageLoaded" class="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </RouterLink>
    <div class="catalog__item-content">
      <h3 class="catalog__title">
        <RouterLink
          :to="{ name: 'product', params: { id: product.id }, meta: { title: product.title } }"
        >
          {{ product.title }}
        </RouterLink>
      </h3>

      <span class="catalog__price"> {{ $format.currRUB(product.price) }} </span>
      <ProductColors :colors="product.colors" v-model="selectedColor" />
    </div>
  </li>
</template>

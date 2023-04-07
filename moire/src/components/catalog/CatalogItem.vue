<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import ProductColors from '../product/ProductColors.vue';
import noimgUrl from '../../assets/no-image.svg';
defineProps(['product']);

const imageLoaded = ref(false);
function onImageLoaded() {
  imageLoaded.value = true;
}
</script>
<template>
  <li class="catalog__item">
    <RouterLink
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id }, meta: { title: product.title } }"
    >
      <img
        :src="product.colors[0].gallery ? product.colors[0].gallery[0].file.url : noimgUrl"
        :alt="product.title"
        @load="onImageLoaded"
      />
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
      <ProductColors :colors="product.colors" />
    </div>
  </li>
</template>

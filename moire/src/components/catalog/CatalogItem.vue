<script setup>
import { RouterLink } from 'vue-router';
import ProductColors from '../product/ProductColors.vue';
const noimgUrl = new URL('../../assets/no-image.svg', import.meta.url).href;
defineProps(['product']);
</script>
<template>
  <li class="catalog__item">
    <RouterLink
      class="catalog__pic"
      :to="{ name: 'product', params: { id: product.id }, state: { title: product.title } }"
    >
      <img
        :src="product.colors[0].gallery ? product.colors[0].gallery[0].file.url : noimgUrl"
        :alt="product.title"
      />
    </RouterLink>
    <div class="catalog__item-content">
      <h3 class="catalog__title">
        <RouterLink
          :to="{ name: 'product', params: { id: product.id }, meta: { title: product.title } }"
        >
          {{ product.title }}
        </RouterLink>
      </h3>

      <span class="catalog__price"> {{ product.price }} ₽ </span>
      <ProductColors :colors="product.colors" />
    </div>
  </li>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import ProductColors from '../product/ProductColors.vue';

defineProps(['product']);
</script>
<template>
  <li class="catalog__item">
    <RouterLink class="catalog__pic" :to="{ name: 'product', params: { id: product.id } }">
      <img
        :src="
          product.colors[0].gallery
            ? product.colors[0].gallery[0].file.url
            : '/src/assets/no-image.svg'
        "
        :alt="product.title"
      />
    </RouterLink>
    <div class="catalog__item-content">
      <h3 class="catalog__title">
        <RouterLink :to="{ name: 'product', params: { id: product.id } }">
          {{ product.title }}
        </RouterLink>
      </h3>

      <span class="catalog__price"> {{ product.price }} ₽ </span>
      <ProductColors :colors="product.colors" />
    </div>
  </li>
</template>
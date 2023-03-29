<script setup>
import ProductItem from './ProductItem.vue';
defineProps(['products']);
</script>

<template>
  <ul class="catalog__list">
    <ProductItem v-for="product in products" :product="product" :key="product.id" />
  </ul>
</template>

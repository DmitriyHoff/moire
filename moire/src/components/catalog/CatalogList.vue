<script setup>
import ProductItem from './CatalogItem.vue';
defineProps(['products']);
</script>

<template>
  <ul class="catalog__list">
    <ProductItem v-for="product in products" :product="product" :key="product.id" />
  </ul>
</template>

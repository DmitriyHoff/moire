<script setup>
import CatalogItem from './CatalogItem.vue';
defineProps(['products']);
</script>

<template>
  <ul class="catalog__list">
    <CatalogItem v-for="product in products" :product="product" :key="product.id" />
  </ul>
</template>

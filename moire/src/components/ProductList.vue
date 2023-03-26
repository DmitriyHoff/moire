<script setup>
import ProductItem from '@/components/ProductItem.vue';
import ProductsPagination from '@/components/ProductsPagination.vue';

defineProps(['products']);
</script>

<template>
  <section class="catalog">
    <ul class="catalog__list">
      <ProductItem v-for="product in products" :product="product" :key="product.id" />
    </ul>

    <ProductsPagination />
  </section>
</template>

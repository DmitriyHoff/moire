<script setup>
import ProductItem from './ProductItem.vue';
import ProductsPagination from './ProductsPagination.vue';
import { ref, computed } from 'vue';

const props = defineProps(['products']);
const count = computed(() => props.products.length || 0);
const page = ref(1);
const perPage = ref(12);
</script>

<template>
  <section class="catalog">
    <ul class="catalog__list">
      <ProductItem v-for="product in products" :product="product" :key="product.id" />
    </ul>

    <ProductsPagination :page="page" :count="count" :perPage="perPage" />
  </section>
</template>

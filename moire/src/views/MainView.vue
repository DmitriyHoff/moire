<script setup>
import { BASE_API_URL } from '@/config.js';
import ProductFilter from '@/components/ProductFilter.vue';
import ProductList from '@/components/ProductList.vue';

import axios from 'axios';
import { onMounted, reactive, computed } from 'vue';

const state = reactive({ products: {} });

onMounted(async () => {
  const response = await axios.get(`${BASE_API_URL}/products`);

  const data = response.data;
  state.products = data.items;
});

// Строка с количеством товаров
const productsCountString = computed(() => {
  const count = state.products.length % 100;
  let s = '';

  if (count >= 10 && count <= 20) {
    s = 'товаров';
  } else if (count % 10 === 1) {
    // s = 'товар';
  } else if (count % 10 > 1 && count % 10 < 5) {
    s = 'товара';
  } else {
    s = 'товаров';
  }

  const result = `${count} ${s}`;
  return result;
});
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <div class="content__row">
        <h1 class="content__title">Каталог</h1>
        <span class="content__info"> {{ productsCountString }}</span>
      </div>
    </div>

    <div class="content__catalog">
      <ProductFilter />
      <ProductList :products="state.products" />
    </div>
  </main>
</template>

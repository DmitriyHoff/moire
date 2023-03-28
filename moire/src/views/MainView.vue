<script setup>
import ProductFilter from '@components/filter/FilterForm.vue';
import ProductList from '@components/ProductList.vue';
import ServerApi from '@/ServerApi';
import { onMounted, ref, computed } from 'vue';

const products = ref({});
const limit = ref(12);
const page = ref(1);
onMounted(async () => {
  products.value = await ServerApi.getProducts();
});

// Строка с количеством товаров
const productsCountString = computed(() => {
  const count = products.value.length % 100;
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
      <ProductList :products="products" />
    </div>
  </main>
</template>

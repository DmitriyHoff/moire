<script setup>
import CategoryFilter from './FilterCategory.vue';
import PriceFilter from './FilterPrice.vue';
import MaterialFilter from './FilterMaterial.vue';
import SeasonFilter from './FilterSeason.vue';
import { ref } from 'vue';

// Параметры фильтра
const priceFrom = ref(0);
const priceTo = ref(5000);
const categoryId = ref(0);
const material = ref();
</script>

<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <PriceFilter v-model:priceFrom="priceFrom" v-model:priceTo="priceTo" />
      <CategoryFilter v-model="categoryId" />
      <MaterialFilter v-model="material" />
      <SeasonFilter />
      <button class="filter__submit button button--primery" type="submit">Применить</button>
      <button class="filter__reset button button--second" type="button">Сбросить</button>
    </form>
  </aside>
</template>

<script setup>
import CategoryFilter from './FilterCategory.vue';
import PriceFilter from './FilterPrice.vue';
import MaterialFilter from './FilterMaterial.vue';
import SeasonsFilter from './FilterSeasons.vue';

import ServerApi from '@/ServerApi';
import { ref } from 'vue';

// Параметры фильтра
const priceFrom = ref(0);
const priceTo = ref(5000);
const categoryId = ref(0);
const materials = ref([]);
const seasons = ref([]);

// Сброс фильтров
function reset() {
  priceFrom.value = 0;
  priceTo.value = 5000;
  categoryId.value = 0;
  materials.value = [];
  seasons.value = [];
}
</script>

<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <PriceFilter v-model:priceFrom="priceFrom" v-model:priceTo="priceTo" />
      <CategoryFilter v-model="categoryId" />
      <MaterialFilter v-model="materials" />
      <SeasonsFilter v-model="seasons" />
      <button
        class="filter__submit button button--primery"
        type="submit"
        @click.prevent="
          {
            //console.log(seasons);
            //ServerApi.getProducts();
          }
        "
      >
        Применить
      </button>
      <button class="filter__reset button button--second" type="button" @click.prevent="reset()">
        Сбросить
      </button>
    </form>
  </aside>
</template>

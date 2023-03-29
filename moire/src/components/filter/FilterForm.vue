<script setup>
import CategoryFilter from './FilterCategory.vue';
import PriceFilter from './FilterPrice.vue';
import MaterialFilter from './FilterMaterial.vue';
import SeasonsFilter from './FilterSeasons.vue';

import { ref } from 'vue';

// Указывает на изменения в форме
const hasChange = ref(false);

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
  hasChange.value = false;
}

function setChange(value = true) {
  hasChange.value = value;
}
</script>

<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <PriceFilter v-model:priceFrom="priceFrom" v-model:priceTo="priceTo" @input="setChange()" />
      <CategoryFilter v-model="categoryId" @change="setChange()" />
      <MaterialFilter v-model="materials" @change="setChange()" />
      <SeasonsFilter v-model="seasons" @change="setChange()" />
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
      <button
        v-if="hasChange"
        class="filter__reset button button--second"
        type="button"
        @click.prevent="reset()"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>

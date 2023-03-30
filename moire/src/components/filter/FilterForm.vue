<script setup>
import CategoryFilter from './FilterCategory.vue';
import PriceFilter from './FilterPrice.vue';
import MaterialFilter from './FilterMaterial.vue';
import SeasonsFilter from './FilterSeasons.vue';

import { ref } from 'vue';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
// Указывает на изменения в форме
const hasChange = ref(false);

// Параметры фильтра
const minPrice = ref(0);
const maxPrice = ref(0);
const categoryId = ref(0);
const materials = ref([]);
const seasons = ref([]);

const queryString = computed(() => ({
  ...(minPrice.value > 0 ? { minPrice: minPrice.value } : {}),
  ...(maxPrice.value > 0 ? { maxPrice: maxPrice.value } : {}),
  ...(categoryId.value > 0 ? { categoryId: categoryId.value } : {}),
  ...(materials.value.length > 0 ? { 'materialIds[]': materials.value } : {}),
  ...(seasons.value.length > 0 ? { 'seasonIds[]': seasons.value } : {}),
}));

// Сброс фильтров
function reset() {
  minPrice.value = 0;
  maxPrice.value = 0;
  categoryId.value = 0;
  materials.value = [];
  seasons.value = [];
  hasChange.value = false;

  router.replace({ query: queryString.value });
}

function setChange(value = true) {
  hasChange.value = value;
}
</script>

<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <PriceFilter v-model:priceFrom="minPrice" v-model:priceTo="maxPrice" @input="setChange()" />
      <CategoryFilter v-model="categoryId" @change="setChange()" />
      <MaterialFilter v-model="materials" @change="setChange()" />
      <SeasonsFilter v-model="seasons" @change="setChange()" />
      <button
        class="filter__submit button button--primery"
        type="submit"
        @click.prevent="$router.replace({ query: queryString })"
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

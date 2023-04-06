<script setup>
import CategoryFilter from './FilterCategory.vue';
import PriceFilter from './FilterPrice.vue';
import MaterialFilter from './FilterMaterial.vue';
import SeasonsFilter from './FilterSeasons.vue';

import { ref } from 'vue';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';

// cnhjrf
//const props = defineProps(['query']);

const router = useRouter();
const route = useRoute();

// Указывает на изменения в форме
const hasChange = ref(false);

// Параметры фильтра
const minPrice = ref(0);
const maxPrice = ref(0);
const categoryId = ref(0);
const materials = ref([]);
const seasons = ref([]);

// Копируем параметры с адресной строки, если они есть
minPrice.value = route.query?.minPrice || 0;
maxPrice.value = route.query?.maxPrice || 0;
categoryId.value = route.query?.categoryId || 0;
materials.value = route.query['materialIds[]'] || [];
seasons.value = route.query['seasonIds[]'] || [];

// Строка запроса с фильтрами
const queryString = computed(() => ({
  ...(minPrice.value > 0 ? { minPrice: minPrice.value } : {}),
  ...(maxPrice.value > 0 ? { maxPrice: maxPrice.value } : {}),
  ...(categoryId.value > 0 ? { categoryId: categoryId.value } : {}),
  ...(materials.value.length > 0 ? { 'materialIds[]': materials.value } : {}),
  ...(seasons.value.length > 0 ? { 'seasonIds[]': seasons.value } : {}),
}));

// Сбросывает фильтры
function reset() {
  minPrice.value = 0;
  maxPrice.value = 0;
  categoryId.value = 0;
  materials.value = [];
  seasons.value = [];
  hasChange.value = false;

  // Просто изменяем адрес, в сторию браузера ничего не добавится
  router.replace({ query: queryString.value });
}
</script>

<template>
  <aside class="filter">
    <form class="filter__form form" action="#" method="get">
      <PriceFilter v-model:priceFrom="minPrice" v-model:priceTo="maxPrice" />
      <CategoryFilter v-model="categoryId" />
      <MaterialFilter v-model="materials" />
      <SeasonsFilter v-model="seasons" />
      <button
        class="filter__submit button button--primery"
        type="submit"
        @click.prevent="$router.replace({ query: queryString })"
      >
        Применить
      </button>
      <button
        v-if="Object.entries(queryString).length > 0"
        class="filter__reset button button--second"
        type="button"
        @click.prevent="reset()"
      >
        Сбросить
      </button>
    </form>
  </aside>
</template>

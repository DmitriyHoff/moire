<script setup>
import { BASE_API_URL } from '../config';
import { ref, onMounted, computed } from 'vue';
import axios from 'axios';

// объявляем свойства и события
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// список материалов и выбранные индексы
const seasons = ref([]);

const checkedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

// получаем материалы с API
onMounted(async () => {
  const response = await axios.get(`${BASE_API_URL}/seasons`);
  const data = response.data;
  seasons.value = data.items;
  console.log(seasons.value);
});
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Коллекция</legend>
    <ul class="check-list">
      <li v-for="season in seasons" :key="season.id" class="check-list__item">
        <label class="check-list__label">
          <input
            class="check-list__check sr-only"
            type="checkbox"
            name="collection"
            :value="season.id"
            v-model="checkedValues"
          />
          <span class="check-list__desc">
            {{ season.title }}
            <span>({{ season.productsCount }})</span>
          </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

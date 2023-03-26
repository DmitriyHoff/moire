<script setup>
import { BASE_API_URL } from '../config';
import { ref, onMounted } from 'vue';
import axios from 'axios';

defineProps(['modelValue']);
defineEmits(['update:modelValue']);
const categories = ref();

onMounted(async () => {
  const response = await axios.get(`${BASE_API_URL}/productCategories`);
  const data = response.data;
  categories.value = data.items;
});
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Категория</legend>
    <label class="form__label form__label--select">
      <select
        class="form__select"
        type="text"
        name="category"
        @change="$emit('update:modelValue', $event.target.value)"
      >
        <option value="0">Все категории</option>
        <option v-for="category in categories" :value="category.id" :key="category.id">
          {{ category.title }}
        </option>
      </select>
    </label>
  </fieldset>
</template>

<script setup>
import { ref, computed } from 'vue';
import ServerApi from '../../ServerApi';

// определяем свойства и события
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);
const categories = ref();
const checkedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

ServerApi.getProductCategories().then((result) => (categories.value = result));
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Категория</legend>
    <label class="form__label form__label--select">
      <select class="form__select" name="category" v-model="checkedValues">
        <option value="0">Все категории</option>
        <option v-for="category in categories" :value="category.id" :key="category.id">
          {{ category.title }}
        </option>
      </select>
    </label>
  </fieldset>
</template>

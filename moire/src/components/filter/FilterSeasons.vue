<script setup>
import { ref, computed } from 'vue';
import ServerApi from '../../ServerApi';

// объявляем свойства и события
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// список сезонов
const seasons = ref([]);

// выбранные индексы
const checkedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

// получаем материалы с API
ServerApi.getSeasons().then((result) => (seasons.value = result));
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
          <span class="check-list__desc"
            >{{ season.title }}
            <span>({{ season.productsCount }})</span>
          </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

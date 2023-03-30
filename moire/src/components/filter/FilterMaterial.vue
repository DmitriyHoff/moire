<script setup>
import { ref, computed } from 'vue';
import ServerApi from '../../ServerApi';

// объявляем свойства и события
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// список материалов
const materials = ref([]);

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
ServerApi.getMaterials().then((result) => (materials.value = result));
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Материал</legend>
    <ul class="check-list">
      <li v-for="material in materials" :key="material.id" class="check-list__item">
        <label class="check-list__label">
          <input
            class="check-list__check sr-only"
            type="checkbox"
            name="material"
            :value="material.id"
            v-model="checkedValues"
          />
          <span class="check-list__desc"
            >{{ material.title }}<span>({{ material.productsCount }})</span>
          </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

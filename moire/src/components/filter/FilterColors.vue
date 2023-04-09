<script setup>
import { ref, computed } from 'vue';
import ServerApi from '../../helpers/server-api';

// объявляем свойства и события
const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

// список материалов
const colors = ref([]);

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
ServerApi.getColors().then((result) => {
  colors.value = result;
});
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цвет</legend>
    <ul class="colors">
      <li class="colors__item" v-for="color in colors" :key="color">
        <label class="colors__label">
          <input
            class="colors__radio sr-only"
            type="checkbox"
            name="color"
            :value="color.id"
            v-model="checkedValues"
          />
          <span class="colors__value" :style="`background: ${color.code}`"></span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

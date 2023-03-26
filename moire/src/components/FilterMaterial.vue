<script setup>
import { BASE_API_URL } from '../config';
import { ref, onMounted } from 'vue';
import axios from 'axios';

// объявляем свойства и события
const props = defineProps(['modelValue']);

defineEmits(['update:modelValue']);

// список материалов и выбранные индексы
const materials = ref([]);
const selectedId = ref();

// получаем материалы с API
onMounted(async () => {
  const response = await axios.get(`${BASE_API_URL}/materials`);
  const data = response.data;
  materials.value = data.items;
});

// обновляет массив выбранных индексов
function updateMaterials(material) {
  // проверяем, если массив не инициализирован - создаём
  selectedId.value = props.modelValue ? props.modelValue : [];

  const index = selectedId.value.indexOf(material);
  if (index > -1) {
    selectedId.value.splice(index, 1);
  } else {
    selectedId.value.push(material);
  }
  debug(`Selected: ${selectedId.value} | ${props.modelValue}`);
  return selectedId.value;
}
function debug(msg) {
  console.log(msg);
}
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
            @change="$emit('update:modelValue', updateMaterials($event.target.value))"
          />
          <span class="check-list__desc"
            >{{ material.title }}<span>({{ material.productsCount }})</span>
          </span>
        </label>
      </li>
    </ul>
  </fieldset>
</template>

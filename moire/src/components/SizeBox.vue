<script setup>
import { computed } from 'vue';
// определяем свойства и события
const props = defineProps(['sizeList', 'modelValue']);
const emit = defineEmits(['update:modelValue']);

console.log(props.sizeList);
const selectedValue = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
<template>
  <select class="form__select" name="category" v-model="selectedValue">
    <option v-for="size in sizeList" :value="size.id" :key="size.id">{{ size.title }}</option>
  </select>
</template>

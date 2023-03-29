<script setup>
import { computed } from 'vue';

const props = defineProps(['colors', 'modelValue']);

const emit = defineEmits(['update:modelValue']);

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
  <ul class="colors">
    <li v-for="item in colors" :key="item.id" class="colors__item">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          name="color-1"
          :value="item.id"
          v-model="selectedValue"
        />
        <span
          class="colors__value"
          :class="selectedValue === item.id ? 'colors--black' : ''"
          :style="`background-color: ${item.color.code}; `"
        >
        </span>
      </label>
    </li>
  </ul>
</template>

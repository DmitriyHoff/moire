<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

const amount = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});

function counterIncrease() {
  amount.value += 1;
}

function counterDecrease() {
  if (amount.value === 1) return;

  amount.value -= 1;
}
</script>
<template>
  <div class="form__counter">
    <button type="button" aria-label="Убрать один товар" @click="counterDecrease">
      <svg v-svg symbol="icon-minus" size="12 12"></svg>
    </button>

    <input type="text" v-model="amount" name="count" />

    <button type="button" aria-label="Добавить один товар" @click="counterIncrease">
      <svg v-svg symbol="icon-plus" size="12 12"></svg>
    </button>
  </div>
</template>

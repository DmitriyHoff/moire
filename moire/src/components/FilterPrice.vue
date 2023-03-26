<script setup>
defineProps(['priceFrom', 'priceTo']);
defineEmits(['update:priceFrom', 'update:priceTo']);
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цена</legend>
    <label class="form__label form__label--price">
      <input
        class="form__input"
        type="text"
        name="min-price"
        :value="priceFrom"
        @input="$emit('update:priceFrom', $event.target.value)"
      />
      <span class="form__value">От</span>
    </label>
    <label class="form__label form__label--price">
      <input
        class="form__input"
        type="text"
        name="max-price"
        :value="priceTo"
        @input="$emit('update:priceTo', $event.target.value)"
      />
      <span class="form__value">До</span>
    </label>
  </fieldset>
</template>

<script setup>
import { Money3Directive as vMoney } from 'v-money3';

defineProps(['priceFrom', 'priceTo']);
defineEmits(['update:priceFrom', 'update:priceTo']);
</script>
<template>
  <fieldset class="form__block">
    <legend class="form__legend">Цена</legend>
    <label class="form__label form__label--price">
      <input
        v-money="{ precision: 0, thousands: ' ' }"
        data-maska="000 000 00#"
        data-maska-tokens="0:[0-9]:optional"
        reversed
        class="form__input"
        type="text"
        name="min-price"
        autocomplete="off"
        :value="priceFrom"
        @input="$emit('update:priceFrom', $event.target.value)"
      />
      <span class="form__value">От</span>
    </label>
    <label class="form__label form__label--price">
      <input
        v-money="{ precision: 0, thousands: ' ' }"
        class="form__input"
        type="text"
        name="max-price"
        autocomplete="off"
        :value="priceTo"
        @input="$emit('update:priceTo', $event.target.value)"
      />
      <span class="form__value">До</span>
    </label>
  </fieldset>
</template>

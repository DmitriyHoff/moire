<script setup>
import { watch, ref, computed } from 'vue';
import ServerApi from '../../helpers/server-api';

const props = defineProps(['modelValue', 'deliveryTypeId', 'error']);
const emit = defineEmits(['update:modelValue']);
const items = ref({});

// следим за изменением типа доставки
watch(
  () => props.deliveryTypeId,
  () => {
    ServerApi.getPayments(props.deliveryTypeId).then((response) => {
      items.value = response;

      // Если есть элементы в массиве
      if (items.value instanceof Array && items.value.length > 0)
        // выбираем первый
        checkedValues.value = items.value[0].id;
    });
  }
);

// возвращает выбранные элементы
const checkedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
</script>
<template>
  <li class="cart__option-item">
    <h3 class="cart__title">Оплата</h3>
    <p v-if="error.request?.paymentTypeId" class="form__error">
      {{ error.request?.paymentTypeId }}
    </p>
    <ul class="cart__options options">
      <li v-for="item in items" :key="item.id" class="options__item">
        <label class="options__label">
          <input
            class="options__radio sr-only"
            type="radio"
            name="pay"
            :value="item.id"
            v-model="checkedValues"
          />
          <span class="options__value"> {{ item.title }}</span>
        </label>
      </li>
    </ul>
  </li>
</template>

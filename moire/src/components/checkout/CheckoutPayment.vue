<script setup>
import { watch, ref, computed } from 'vue';
import ServerApi from '../../helpers/server-api';

const props = defineProps(['modelValue', 'deliveryTypeId', 'error']);
const emit = defineEmits(['update:modelValue']);
const items = ref({});
// следим за изменением свойства
watch(
  () => props.deliveryTypeId,
  () => {
    ServerApi.getPayments(props.deliveryTypeId).then((response) => {
      console.log('pay', response);
      items.value = response;
    });
  }
);

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

<script setup>
import { ref, computed } from 'vue';
import ServerApi from '../../helpers/server-api';
const props = defineProps(['modelValue', 'error']);
const emit = defineEmits(['update:modelValue']);
const loading = ref(false);
loading.value = true;
const deliveries = ref({});

const checkedValues = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit('update:modelValue', value);
  },
});
ServerApi.getDeliveries().then((response) => {
  deliveries.value = response;
  loading.value = false;
});
</script>
<template>
  <li class="cart__option-item">
    <h3 class="cart__title">Доставка</h3>
    <p v-if="error.request?.deliveryTypeId" class="form__error">
      {{ error.request?.deliveryTypeId }}
    </p>
    <ul v-if="!loading" class="cart__options options">
      <li class="options__item" v-for="delivery in deliveries" :key="delivery.id">
        <label class="options__label">
          <input
            class="options__radio sr-only"
            type="radio"
            name="delivery"
            :value="delivery.id"
            v-model="checkedValues"
          />
          <span class="options__value">
            {{ delivery.title }}
            <strong v-if="delivery.price > 0">
              {{ $format.currRUB(delivery.price) }}
            </strong>
          </span>
        </label>
      </li>
    </ul>
  </li>
</template>

<script setup>
import { ref, watch } from 'vue';
import ServerApi from '../../helpers/server-api';
defineProps(['error']);
const emit = defineEmits(['update:delivery']);
const loading = ref(true);

// все варианты доставки
const deliveries = ref({});

// Id выбранного способа доставки
const selectedValue = ref(0);

watch(
  // Если изменился Id
  () => selectedValue.value,
  (val) =>
    // Отправим событие с новым объектом типа доставки
    emit(
      'update:delivery',
      deliveries.value.find((x) => x.id === val)
    )
);

// выполняем запрос к API
ServerApi.getDeliveries().then((response) => {
  deliveries.value = response;

  // Если есть элементы в массиве
  if (deliveries.value instanceof Array && deliveries.value.length > 0)
    // выбираем Id первого элемента
    selectedValue.value = deliveries.value[0].id;

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
            v-model="selectedValue"
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

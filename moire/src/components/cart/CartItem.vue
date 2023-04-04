<script setup>
import { ref, defineProps } from 'vue';
import SKU from '../../helpers/sku-generator';
import ServerApi from '../../helpers/server-api';
import getColorTranslate from '../../helpers/color-dictionary';
import { useCartStore } from '../../stores/counter';

const TIMEOUT = 300;
const store = useCartStore();

const props = defineProps(['item']);
const emit = defineEmits(['update:cart', 'confirm:delete']);
const product = ref(props.item.product);
const amount = ref(props.item.quantity);
console.log('product', props.item);
let timerId;

// Увеличивает количество товара
function increaseCount() {
  amount.value++;
  sendNewValue();
}

// Уменьшает количество товара
function decreaseCount() {
  if (amount.value > 1) amount.value--;
  else {
    sendNewValue(true);
    // emit('confirm:delete', props.item.id);
    return;
  }
  sendNewValue();
}

// Отправляет новое значенние на сервер
function sendNewValue(isLast = false) {
  // сбрасываем таймер
  clearTimeout(timerId);

  // выполним запрос, когда пользователь завершил ввод
  timerId = setTimeout(() => {
    if (!isLast) {
      ServerApi.changeBasketQuantity(props.item.id, amount.value, store.user.accessKey).then(
        (result) => {
          console.log(result);
          emit('update:cart', result);
        }
      );
    } else {
      ServerApi.deleteBasketProduct(props.item.id, store.user.accessKey).then((result) => {
        console.log('DELETE', result);
        emit('update:cart', result);
      });
    }
  }, TIMEOUT);
}
</script>
<template>
  <li class="cart__item product">
    <RouterLink class="product__pic" :to="{ name: 'product', params: { id: item.product.id } }">
      <img :src="item.color.gallery[0].file.url" width="120" height="120" :alt="item.title" />
    </RouterLink>

    <div class="product__content">
      <div class="product__info-wrap">
        <h3 class="product__title">{{ product.title }}</h3>

        <p class="product__info product__info--color">
          Цвет:
          <span>
            <i :style="`background-color: ${item.color.color.code}`"></i>
            {{ getColorTranslate(item.color.color.title) }}
          </span>
        </p>
        <p class="product__size">
          Размер:
          <span> {{ item.size.title }}</span>
        </p>

        <!-- <span class="product__size"> Размер: {{ item.size.title }}</span> -->
        <span class="product__code">
          Артикул:
          {{
            new SKU({ id: item.product.id, color: item.color.color.id, size: item.size.id })
          }}</span
        >
      </div>
      <div class="product__counter form__counter">
        <button type="button" aria-label="Убрать один товар" @click="decreaseCount()">
          <svg v-if="amount === 1" v-svg size="16 16" symbol="icon-delete"></svg>
          <svg v-else v-svg size="12 12" symbol="icon-minus"></svg>
        </button>

        <input type="text" :value="amount" name="count" />

        <button type="button" aria-label="Добавить один товар" @click="increaseCount()">
          <svg v-svg size="12 12" symbol="icon-plus"></svg>
        </button>
      </div>
    </div>

    <div class="product__price">{{ product.price * amount }}₽</div>
  </li>
</template>

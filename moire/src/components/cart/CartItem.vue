<script setup>
import { ref } from 'vue';
import toSkuString from '../../helpers/sku-generator';
import ServerApi from '../../helpers/server-api';
import translateColorName from '../../helpers/color-dictionary';
import { useCartStore } from '../../stores/counter';
import noimageUrl from '../../assets/no-image.svg';

const TIMEOUT = 300;
const store = useCartStore();

const props = defineProps(['item']);
const emit = defineEmits(['update:cart', 'confirm:delete']);
const product = ref(props.item.product);
const amount = ref(props.item.quantity);
const sku = ref(
  toSkuString({
    id: product.value.id,
    color: props.item.color.color.id,
    size: props.item.size.id,
  })
);

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
    const user = store.getUser();
    if (!isLast) {
      ServerApi.changeBasketQuantity(props.item.id, amount.value, user?.accessKey).then(
        (result) => {
          emit('update:cart', result);
        }
      );
    } else {
      ServerApi.deleteBasketProduct(props.item.id, user?.accessKey).then((result) => {
        emit('update:cart', result);
      });
    }
  }, TIMEOUT);
}

function setImageSrc(gallery) {
  if (!gallery) {
    return noimageUrl;
  } else {
    return gallery[0]?.file.url;
  }
}
</script>
<template>
  <li class="cart__item product">
    <RouterLink class="product__pic" :to="{ name: 'product', params: { id: item.product.id } }">
      <img :src="setImageSrc(item.color.gallery)" width="120" height="120" :alt="item.title" />
    </RouterLink>

    <div class="product__content">
      <div class="product__info-wrap">
        <h3 class="product__title">{{ product.title }}</h3>

        <p class="product__info product__info--color">
          Цвет:
          <span>
            <i :style="`background-color: ${item.color.color.code}`"></i>
            {{ translateColorName(item.color.color.title) }}
          </span>
        </p>
        <p class="product__size">
          Размер:
          <span> {{ item.size.title }}</span>
        </p>

        <!-- <span class="product__size"> Размер: {{ item.size.title }}</span> -->
        <span class="product__code">
          Артикул:
          {{ sku }}</span
        >
      </div>
      <div class="product__counter form__counter">
        <div class="product__counter-wrap">
          <button type="button" aria-label="Убрать один товар" @click="decreaseCount()">
            <svg v-if="amount === 1" v-svg size="16 16" symbol="icon-delete"></svg>
            <svg v-else v-svg size="12 12" symbol="icon-minus"></svg>
          </button>

          <input type="text" :value="amount" name="count" />

          <button type="button" aria-label="Добавить один товар" @click="increaseCount()">
            <svg v-svg size="12 12" symbol="icon-plus"></svg>
          </button>
        </div>
        <div class="product__price">{{ $format.currRUB(product.price * amount) }}</div>
      </div>
    </div>
  </li>
</template>

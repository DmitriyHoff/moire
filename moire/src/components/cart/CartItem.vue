<script setup>
import { ref, defineProps } from 'vue';

const props = defineProps(['item']);
const product = ref(props.item.product);
console.log(product.value);
</script>
<template>
  <li class="cart__item product">
    <div class="product__pic">
      <img src="../../../img/product-square-4.jpg" width="120" height="120" alt="Название товара" />
    </div>
    <h3 class="product__title">{{ product.title }}</h3>
    <p class="product__info product__info--color">
      Цвет:
      <span>
        <i style="background-color: #ff9b78"></i>
        Персиковый
      </span>
    </p>
    <span class="product__code"> Артикул: 1501230 </span>

    <div class="product__counter form__counter">
      <button type="button" aria-label="Убрать один товар">
        <svg v-svg size="10 10" symbol="icon-minus"></svg>
      </button>

      <input type="text" value="1" name="count" />

      <button type="button" aria-label="Добавить один товар">
        <svg v-svg size="10 10" symbol="icon-plus"></svg>
      </button>
    </div>

    <b class="product__price"> 990 ₽ </b>

    <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины">
      <svg v-svg size="10 10" symbol="icon-close"></svg>
    </button>
  </li>
</template>

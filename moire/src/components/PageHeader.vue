<script setup>
import { SHOP_PHONE } from '../config.js';
import CartCounter from './cart/CartCounterIcon.vue';
</script>
<template>
  <header class="header container">
    <div class="header__wrapper">
      <span class="header__info">Каталог</span>
      <RouterLink class="header__logo" :to="{ name: 'main' }">
        <svg v-svg symbol="logo" size="116 34"></svg>
      </RouterLink>
      <a class="header__tel" :href="`tel:${SHOP_PHONE}`">{{ SHOP_PHONE }}</a>
      <CartCounter />
    </div>
  </header>
</template>

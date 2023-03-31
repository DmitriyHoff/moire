<script setup>
import { SHOP_PHONE } from '../config.js';
import CartCounter from './cart/CartCounterIcon.vue';
</script>
<template>
  <header class="header container">
    <div class="header__wrapper">
      <span class="header__info">Каталог</span>
      <RouterLink class="header__logo" :to="{ name: 'main' }">
        <img
          src="/img/svg/logo-moire.svg"
          alt="Логотип интернет магазина Moire"
          width="116"
          height="34"
        />
      </RouterLink>
      <a class="header__tel" :href="`tel:${SHOP_PHONE}`">{{ SHOP_PHONE }}</a>
      <CartCounter />
    </div>
  </header>
</template>

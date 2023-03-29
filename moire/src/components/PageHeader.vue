<script setup>
import { SHOP_PHONE } from '../config.js';
import { RouterLink } from 'vue-router';
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

      <a class="header__cart" href="cart.html" aria-label="Корзина с товарами">
        <svg v-svg symbol="icon-cart" size="0 0 19 24"></svg>
        <span class="header__count" aria-label="Количество товаров">3</span>
      </a>
    </div>
  </header>
</template>

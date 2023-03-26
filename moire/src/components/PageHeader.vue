<script setup>
import { SHOP_PHONE } from '../config.js';
</script>
<template>
  <header class="header container">
    <div class="header__wrapper">
      <span class="header__info">Каталог</span>

      <a class="header__logo" href="#">
        <img
          src="/img/svg/logo-moire.svg"
          alt="Логотип интернет магазина Moire"
          width="116"
          height="34"
        />
      </a>

      <a class="header__tel" href="tel:8 800 600 90 09">{{ SHOP_PHONE }}</a>

      <a class="header__cart" href="cart.html" aria-label="Корзина с товарами">
        <svg v-svg symbol="icon-cart" size="0 0 19 24"></svg>
        <span class="header__count" aria-label="Количество товаров">3</span>
      </a>
    </div>
  </header>
</template>

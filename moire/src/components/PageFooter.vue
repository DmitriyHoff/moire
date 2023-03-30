<script setup>
import { SHOP_PHONE, SHOP_EMAIL } from '../config.js';
</script>
<template>
  <footer class="footer container">
    <div class="footer__wrapper">
      <ul class="footer__links">
        <li>
          <RouterLink class="footer__link" :to="{ name: 'main' }"> Каталог </RouterLink>
        </li>
        <li>
          <a class="footer__link" :href="`tel:${SHOP_PHONE}`">{{ SHOP_PHONE }}</a>
        </li>
        <li>
          <a class="footer__link" :href="`mailto:${SHOP_EMAIL}`">{{ SHOP_EMAIL }}</a>
        </li>
        <li>
          <a class="footer__link" href="#"> Распродажа </a>
        </li>
        <li>
          <a class="footer__link footer__link--medium" href="#"> Заказать звонок </a>
        </li>
      </ul>

      <ul class="footer__social social">
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Вконтакте">
            <svg v-svg symbol="icon-vk" size="0 0 20 11"></svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Инстаграм">
            <svg v-svg symbol="icon-insta" size="0 0 17 17"></svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Facebook">
            <svg v-svg symbol="icon-facebook" size="0 0 17 17"></svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Twitter">
            <svg v-svg symbol="icon-twitter" size="0 0 17 14"></svg>
          </a>
        </li>
        <li class="social__item">
          <a class="social__link" href="#" aria-label="Telegram">
            <svg v-svg symbol="icon-telegram" size="0 0 19 17"></svg>
          </a>
        </li>
      </ul>

      <p class="footer__desc">
        Все права на&nbsp;материалы, находящиеся на&nbsp;сайте, охраняются в&nbsp;соответствии
        с&nbsp;законодательством&nbsp;РФ, в&nbsp;том числе об&nbsp;авторском праве и&nbsp;смежных
        правах.
      </p>

      <ul class="footer__data">
        <li>
          <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
            Политика конфиденциальности
          </a>
        </li>
        <li>
          <a class="footer__link" href="#" target="_blank" rel="noopener" type="application/pdf">
            Публичная оферта
          </a>
        </li>
      </ul>

      <span class="footer__copyright">© 2020 - {{ new Date().getFullYear() }} Moire</span>
    </div>
  </footer>
</template>

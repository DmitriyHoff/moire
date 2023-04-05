<script setup>
import { ref } from 'vue';

import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import CheckoutForm from '../components/checkout/CheckoutForm.vue';
// Формируем цепочку ссылок
const breadcrumbs = ref([
  { title: 'Каталог', route: { name: 'main' } },
  {
    title: 'Корзина',
    route: { name: 'cart' },
  },
  {
    title: 'Оформление заказа',
    route: { name: '#' },
  },
]);
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail :links="breadcrumbs" />

      <div class="content__row">
        <h1 class="content__title">Оформление заказа</h1>
      </div>
    </div>

    <section class="cart">
      <CheckoutForm />
    </section>
  </main>
</template>

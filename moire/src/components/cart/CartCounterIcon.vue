<script setup>
import { useCounterStore } from '../../stores/counter';

const store = useCounterStore();

store.count++;
</script>
<template>
  <RouterLink class="header__cart" :to="{ name: 'cart' }" aria-label="Корзина с товарами">
    <svg v-svg symbol="icon-cart" size="0 0 19 24"></svg>
    <span class="header__count" aria-label="Количество товаров">{{ store.count }}</span>
  </RouterLink>
</template>

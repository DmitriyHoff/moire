<script setup>
import { useCartStore } from '../../stores/counter';
import ServerApi from '../../helpers/server-api';
import { storeToRefs } from 'pinia';

const store = useCartStore();
const { user } = storeToRefs(store);
const { count } = storeToRefs(store);
if (user.value?.accessKey) {
  ServerApi.getBasket(user.value.accessKey).then((result) => {
    Object.assign(store.cart, result);
    store.user = store.cart.user;
  });
}
</script>
<template>
  <RouterLink class="header__cart" :to="{ name: 'cart' }" aria-label="Корзина с товарами">
    <svg v-svg symbol="icon-cart" size="19 24"></svg>
    <span class="header__count" aria-label="Количество товаров">{{ count }}</span>
  </RouterLink>
</template>

<script setup>
import { useCartStore } from '../../stores/counter';
import ServerApi from '../../helpers/server-api';
import { storeToRefs } from 'pinia';

const store = useCartStore();
const { count } = storeToRefs(store);

const user = store.getUser();
if (user?.accessKey) {
  ServerApi.getBasket(user.accessKey).then((result) => {
    Object.assign(store.cart, result);
    store.setUser(store.cart.user);
  });
}
</script>
<template>
  <RouterLink class="header__cart" :to="{ name: 'cart' }" aria-label="Корзина с товарами">
    <svg v-svg symbol="icon-cart" size="19 24"></svg>
    <span class="header__count" aria-label="Количество товаров">{{ count }}</span>
  </RouterLink>
</template>

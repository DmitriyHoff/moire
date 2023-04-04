<script setup>
import { storeToRefs } from 'pinia';
import CartItem from '../components/cart/CartItem.vue';
import { useCartStore } from '../stores/counter';
import ServerApi from '../helpers/server-api';
import { ref, computed } from 'vue';
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
const store = useCartStore();
const { user, cart } = storeToRefs(store);
console.log('cart:', cart.value);

// индикатор загрузки
const loading = ref(false);
if (user.value?.accessKey) {
  loading.value = true; // указываем, что страница загружается
  ServerApi.getBasket(user.value.accessKey).then((result) => {
    Object.assign(cart, result);
    store.user = user;
    loading.value = false; // страница загружена
  });
}
const totalPrice = computed(() => {
  return cart.value.items.reduce((acc, item) => (acc += item.price * item.quantity), 0);
});
const breadcrumbs = ref([
  { title: 'Каталог', route: { name: 'main' } },
  {
    title: 'Корзина',
    route: { path: '#' },
  },
]);

/** Обновляет козину новыми значениями */
function updateCart(newCart) {
  Object.assign(store.cart, newCart);
}
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail :links="breadcrumbs" />
    </div>
    <section class="cart">
      <form v-if="!loading && store.count > 0" class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <CartItem
              v-for="item in store.cart.items"
              :key="item.id"
              :item="item"
              @update:cart="updateCart($event)"
            />
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе</p>
          <p class="cart__price">
            Итого: <span>{{ totalPrice }} ₽</span>
          </p>

          <button
            class="cart__button button button--primery"
            type="submit"
            @click.prevent="() => $router.push({ name: 'checkout' })"
          >
            Оформить заказ
          </button>
        </div>
      </form>
      <div v-else-if="!loading">
        <h2>Ой, пусто!</h2>
        <p>
          Ваша корзина пуста, откройте каталог <br />и выбирайте лучшие товары с бесплатной
          доставкой
        </p>
        <br />
        <button
          class="item__button button button--primery"
          @click.prevent="$router.push({ name: 'products' })"
        >
          Начать покупки
        </button>
      </div>
    </section>
  </main>
</template>

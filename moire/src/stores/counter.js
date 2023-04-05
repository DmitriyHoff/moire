import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const user = computed({
    get() {
      return JSON.parse(localStorage.getItem('user'));
    },
    set(userInfo) {
      localStorage.setItem('user', JSON.stringify(userInfo));
    },
  });
  const cart = reactive({});
  const count = computed(() =>
    cart.items ? cart.items.reduce((acc, current) => (acc += current.quantity), 0) : 0
  );
  const totalPrice = computed(() =>
    cart.items
      ? cart.items.reduce((acc, current) => (acc += current.quantity * current.price), 0)
      : 0
  );
  return { user, cart, count, totalPrice };
});

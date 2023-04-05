import { computed, reactive } from 'vue';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', () => {
  const cart = reactive({});
  const count = computed(() =>
    cart.items ? cart.items.reduce((acc, current) => (acc += current.quantity), 0) : 0
  );
  const totalPrice = computed(() =>
    cart.items
      ? cart.items.reduce((acc, current) => (acc += current.quantity * current.price), 0)
      : 0
  );
  // const user = computed({
  //   get() {
  //     return JSON.parse(localStorage.getItem('user'));
  //   },
  //   set(userInfo) {
  //     localStorage.setItem('user', JSON.stringify(userInfo));
  //   },
  // });
  function setUser(newUser) {
    localStorage.setItem('user', JSON.stringify(newUser));
  }
  function getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  return { cart, count, totalPrice, setUser, getUser };
});

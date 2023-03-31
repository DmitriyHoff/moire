import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'; // ✨
export const useCounterStore = defineStore('cart', () => {
  const count = ref(0);
  const name = ref('Eduardo');
  const doubleCount = computed(() => count.value * 2);
  function increment() {
    count.value++;
  }
  const state = useStorage('cart', { count, name });
  return { count, name, doubleCount, increment, state };
});

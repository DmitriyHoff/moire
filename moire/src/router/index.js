import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
  ],
  // при переходах полосу прокрутки ставим в начало
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;

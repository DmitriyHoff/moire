import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
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
      path: '/products/:limit/:page',
      name: 'products:limit',
      component: () => import('../views/MainView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
  ],
});

export default router;

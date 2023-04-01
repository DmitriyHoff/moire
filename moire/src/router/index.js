import { createRouter, createWebHistory } from 'vue-router';
import { h } from 'vue';

// const baseUrl = location.pathname;
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: {
        render: () => h('div', ['404! Страница не найдена!']),
      },
    },
    {
      path: '/',
      name: 'main',
      redirect: () => {
        return { name: 'products' };
      },
    },
    {
      path: '/products',
      name: 'products',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/products/:limit/:page',
      name: 'products:limit',
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
  ],
});

export default router;

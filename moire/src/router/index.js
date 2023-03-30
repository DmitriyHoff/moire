import { createRouter, createWebHistory } from 'vue-router';
import { h } from 'vue';
const router = createRouter({
  history: createWebHistory(),
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
      redirect: () => 'products',
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
  ],
});

export default router;

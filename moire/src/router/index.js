import { createRouter, createWebHashHistory } from 'vue-router';
import { h } from 'vue';
// const baseUrl = location.pathname;

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  mode: 'history',
  routes: [
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      meta: { title: '404 Странца не найдена' },
      component: {
        render: () => h('div', ['404! Страница не найдена!']),
      },
    },
    {
      path: '/',
      name: 'main',
      meta: { title: 'Moire' },
      redirect: () => {
        return { name: 'products' };
      },
    },
    {
      path: '/products',
      name: 'products',
      meta: { title: 'Каталог' },
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/products/:limit/:page',
      name: 'products:limit',
      meta: { title: 'Каталог' },
      component: () => import('../views/CatalogView.vue'),
    },
    {
      path: '/product/:id',
      name: 'product',
      meta: (route) => route.meta?.title || 'Каталог',
      component: () => import('../views/ProductView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      meta: { title: 'Корзина' },
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/checkout',
      name: 'checkout',
      meta: { title: 'Оформление заказа' },
      component: () => import('../views/CheckoutView.vue'),
    },
    {
      path: '/order',
      name: 'order',
      meta: { title: 'Статус заказа' },
      component: () => import('../views/OrderView.vue'),
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Каталог';
  next();
});
export default router;

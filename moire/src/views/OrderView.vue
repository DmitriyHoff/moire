<script setup>
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import getColorTranslate from '../helpers/color-dictionary';
import { reactive } from 'vue';
import ServerApi from '../helpers/server-api';
import { useCartStore } from '../stores/counter';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
// const orderInfo = reactive({
//   id: 2070,
//   name: 'Dmitry Hoff',
//   address: 'ул. Тенистая Аллея, тер. СНТ "Ромашка", пр-д Малый Розовый, д. 7',
//   phone: '+7(909) 782-03-65',
//   email: 'goffdmitriy@gmail.com',
//   totalPrice: 2200,
//   deliveryType: {
//     id: 2,
//     title: 'Доставка курьером',
//     price: '1200',
//   },
//   paymentType: 'Оплата наличным',
//   comment: 'hgh',
//   basket: {
//     id: 15543,
//     items: [
//       {
//         id: 10565,
//         price: 1000,
//         quantity: 1,
//         color: {
//           id: 77,
//           color: {
//             id: 27,
//             title: 'white',
//             code: '#ffffff',
//           },
//           gallery: [
//             {
//               file: {
//                 url: 'https://vue-moire.skillbox.cc/uploads/file/3/6/e/36efa79c31cb4400f8f9ce69a7d6f6a6.png',
//                 name: '36efa79c31cb4400f8f9ce69a7d6f6a6.png',
//                 originalName: 'Rectangle 13++.png',
//                 extension: 'png',
//                 size: '63.5 Кб',
//               },
//             },
//           ],
//         },
//         size: {
//           id: 4,
//           title: 'M',
//         },
//         product: {
//           id: 2,
//           title: 'Футболка',
//           slug: 'futbolka',
//           price: 1000,
//           colors: [
//             {
//               id: 77,
//               color: {
//                 id: 27,
//                 title: 'white',
//                 code: '#ffffff',
//               },
//               gallery: [
//                 {
//                   file: {
//                     url: 'https://vue-moire.skillbox.cc/uploads/file/3/6/e/36efa79c31cb4400f8f9ce69a7d6f6a6.png',
//                     name: '36efa79c31cb4400f8f9ce69a7d6f6a6.png',
//                     originalName: 'Rectangle 13++.png',
//                     extension: 'png',
//                     size: '63.5 Кб',
//                   },
//                 },
//               ],
//             },
//           ],
//           seasons: [
//             {
//               id: 3,
//               title: 'Лето',
//               code: 'summer',
//               productsCount: 10,
//             },
//           ],
//           materials: [
//             {
//               id: 1,
//               title: 'Хлопок',
//               code: 'cotton',
//               productsCount: 6,
//             },
//             {
//               id: 2,
//               title: 'Шерсть',
//               code: 'wool',
//               productsCount: 4,
//             },
//           ],
//         },
//       },
//     ],
//     user: {
//       id: 14243,
//       accessKey: '027b84599c70cb6bd12adab61ee8efbd',
//     },
//   },
//   status: {
//     id: 2,
//     title: 'Обрабатывается менеджером',
//     code: 'process',
//   },
// });

const orderInfo = reactive({});
const store = useCartStore();
const route = useRoute();
const loading = ref(true);
const user = store.getUser();
ServerApi.getOrderInfo(route.params.id, user.accessKey).then((response) => {
  Object.assign(orderInfo, response);

  loading.value = false;
});

// Формируем цепочку ссылок
const breadcrumbs = ref([
  { title: 'Каталог', route: { name: 'main' } },
  { title: 'Статус заказа', route: { name: '#' } },
]);
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail :links="breadcrumbs" />

      <h1 class="content__title">
        Заказ оформлен <span>№ {{ orderInfo.id }}</span>
      </h1>
    </div>

    <section v-if="!loading" class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <p class="cart__message">
            Благодарим за&nbsp;выбор нашего магазина. На&nbsp;Вашу почту придет письмо
            с&nbsp;деталями заказа. Наши менеджеры свяжутся с&nbsp;Вами в&nbsp;течение часа для
            уточнения деталей доставки.
          </p>

          <ul class="dictionary">
            <li class="dictionary__item">
              <span class="dictionary__key"> Получатель </span>
              <span class="dictionary__value"> {{ orderInfo.name }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Адрес доставки </span>
              <span class="dictionary__value"> {{ orderInfo.address }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Телефон </span>
              <span class="dictionary__value"> {{ orderInfo.phone }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Email </span>
              <span class="dictionary__value"> {{ orderInfo.email }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Способ оплаты </span>
              <span class="dictionary__value"> {{ orderInfo.paymentType }}</span>
            </li>
            <li class="dictionary__item">
              <span class="dictionary__key"> Статус заказа </span>
              <span class="dictionary__value">
                <strong>{{ orderInfo.status.title }}</strong>
              </span>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <ul class="cart__orders">
            <li class="cart__order" v-for="item in orderInfo.basket.items" :key="item.id">
              <h3>{{ item.product.title }}</h3>
              <b>{{ $format.currRUB(item.price) }}</b>
              <p class="cart__sku">
                <span>Цвет: {{ getColorTranslate(item.product.colors[0].color.title) }}</span>
                <span>Размер: {{ item.size.title }}</span>
              </p>
              <span class="cart__total-count"
                >{{ item.quantity }} шт. &#x00d7; {{ $format.currRUB(item.price) }}</span
              >
            </li>
          </ul>

          <div class="cart__total">
            <p>{{ orderInfo.deliveryType.title }}:</p>
            <p class="cart__order-price">{{ $format.currRUB(orderInfo.deliveryType.price) }}</p>
            <p>
              Итого: <b>{{ orderInfo.basket.items.length }}</b>
              {{ $format.countText(orderInfo.basket.items.length) }} на сумму:
            </p>
            <p class="cart__order-price">{{ $format.currRUB(orderInfo.totalPrice) }}</p>
          </div>
        </div>
      </form>
    </section>
  </main>
</template>

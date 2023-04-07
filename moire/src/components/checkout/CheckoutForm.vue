<script setup>
import CheckoutDelivery from './CheckoutDelivery.vue';
import CheckoutPayment from './CheckoutPayment.vue';
import getColorTranslate from '../../helpers/color-dictionary';

import { useCartStore } from '../../stores/counter';
import { ref, reactive } from 'vue';
import ServerApi from '../../helpers/server-api';
import { useRouter } from 'vue-router';

const store = useCartStore();
const router = useRouter();
const hasError = ref(false);
const submitWaiting = ref(false);
const error = reactive({});
const orderInfo = reactive({
  name: '',
  address: '',
  phone: '',
  email: '',
  deliveryTypeId: 0,
  paymentTypeId: 0,
  comment: '',
});

function submit() {
  submitWaiting.value = true;
  const user = store.getUser();
  ServerApi.makeOrder(user?.accessKey, orderInfo).then((response) => {
    console.log(response);
    if (response.error) {
      Object.assign(error, response.error);
    } else router.push({ name: 'order', params: { id: response.id } });
    submitWaiting.value = false;
  });
}

// Опции для маски поля ФИО
const nameMaskOptions = reactive({
  tokens: {
    A: { pattern: /[A-ZА-ЯЁ]/, transform: (v) => v.toLocaleUpperCase() },
    z: { pattern: /[a-zа-яё]/, transform: (v) => v.toLocaleLowerCase(), multiple: true },
  },
});
</script>
<template>
  <form class="cart__form form" action="#" method="POST">
    <div class="cart__field">
      <div class="cart__data">
        <label class="form__label">
          <input
            v-maska:[nameMaskOptions]
            data-maska="Az Az Az"
            class="form__input"
            type="text"
            name="name"
            placeholder="Введите ваше полное имя"
            v-model="orderInfo.name"
          />
          <span class="form__value">ФИО</span>
          <span v-if="error.request?.name" class="form__error">{{ error.request.name }}</span>
        </label>

        <label class="form__label">
          <input
            class="form__input"
            type="text"
            name="address"
            placeholder="Введите ваш адрес"
            v-model="orderInfo.address"
          />
          <span class="form__value">Адрес доставки</span>
          <span v-if="error.request?.address" class="form__error">{{ error.request.address }}</span>
        </label>

        <label class="form__label">
          <input
            v-maska
            data-maska="+7(###) ###-##-##"
            data-maska-eager
            class="form__input"
            type="tel"
            name="phone"
            placeholder="+7(XXX) XXX-XX-XX"
            v-model="orderInfo.phone"
          />
          <span class="form__value">Телефон</span>
          <span v-if="error.request?.phone" class="form__error">{{ error.request.phone }}</span>
        </label>

        <label class="form__label">
          <input
            class="form__input"
            type="email"
            name="email"
            placeholder="Введи ваш Email"
            v-model="orderInfo.email"
          />
          <span class="form__value">Email</span>
          <span v-if="error.request?.email" class="form__error">{{ error.request.email }}</span>
        </label>

        <label class="form__label">
          <textarea
            class="form__input form__input--area"
            name="comments"
            placeholder="Ваши пожелания"
            v-model="orderInfo.comment"
          ></textarea>
          <span class="form__value">Комментарий к заказу</span>
        </label>
      </div>

      <ul class="cart__options">
        <CheckoutDelivery v-model="orderInfo.deliveryTypeId" :error="error" />
        <CheckoutPayment
          v-model="orderInfo.paymentTypeId"
          :deliveryTypeId="orderInfo.deliveryTypeId"
          :error="error"
        />
      </ul>
    </div>

    <div class="cart__block">
      <ul class="cart__orders">
        <li v-for="item in store.cart.items" class="cart__order" :key="item.id">
          <h3>{{ item.product.title }}</h3>
          <b>{{ $format.currRUB(item.price * item.quantity) }}</b>
          <p class="cart__sku">
            <span>Цвет: {{ getColorTranslate(item.product.colors[0].color.title) }}</span>
            <span>Размер: {{ item.size.title }}</span>
          </p>
          <span class="cart__total-count">
            {{ item.quantity }} шт. &#x00d7; {{ $format.currRUB(item.price) }}
          </span>
        </li>
      </ul>

      <div class="cart__total">
        <p>Доставка:</p>
        <p class="cart__order-price">бесплатно</p>
        <p>
          Итого: <b>{{ store.count }}</b> {{ $format.countText(store.count) }} на сумму:
        </p>
        <p class="cart__order-price">{{ $format.currRUB(store.totalPrice) }}</p>
      </div>

      <button
        class="cart__button button button--primery"
        :class="submitWaiting ? 'button--loading' : ''"
        type="submit"
        @click.prevent="submit"
      >
        <span class="button__text">Оформить заказ</span>
      </button>
    </div>
    <div v-if="hasError" class="cart__error form__error-block">
      <h4>Заявка не отправлена!</h4>
      <p>Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.</p>
    </div>
  </form>
</template>

<script setup>
import CheckoutDelivery from './CheckoutDelivery.vue';
import CheckoutPayment from './CheckoutPayment.vue';
import SKU from '../../helpers/sku-generator';

import { useCartStore } from '../../stores/counter';
import { ref, reactive } from 'vue';
import ServerApi from '../../helpers/server-api';

const store = useCartStore();
const hasError = ref(false);

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
  const user = store.getUser();
  ServerApi.makeOrder(user?.accessKey, orderInfo).then((response) => {
    console.log(response);
  });
}
</script>
<template>
  <form class="cart__form form" action="#" method="POST">
    <div class="cart__field">
      <div class="cart__data">
        <label class="form__label">
          <input
            class="form__input"
            type="text"
            name="name"
            placeholder="Введите ваше полное имя"
            v-model="orderInfo.name"
          />
          <span class="form__value">ФИО</span>
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
        </label>

        <label class="form__label">
          <input
            v-maska
            data-maska="+7(###) ###-##-##"
            class="form__input"
            type="tel"
            name="phone"
            placeholder="Введите ваш телефон"
            v-model="orderInfo.phone"
          />
          <span class="form__value">Телефон</span>
          <span class="form__error">Неверный формат телефона</span>
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

      <div class="cart__options">
        <CheckoutDelivery />
        <CheckoutPayment />
      </div>
    </div>

    <div class="cart__block">
      <ul class="cart__orders">
        <li v-for="item in store.cart.items" class="cart__order" :key="item.id">
          <h3>
            {{ `${item.product.title} (${item.size.title}) |${item.quantity} шт.` }}
          </h3>
          <b>{{ item.price * item.quantity }} ₽</b>
          <span
            >Артикул:
            {{
              SKU.get({
                id: item.product.id,
                color: item.color.color.id,
                size: item.size.id,
              })
            }}</span
          >
        </li>
      </ul>

      <div class="cart__total">
        <p>Доставка: <b>бесплатно</b></p>
        <p>
          Итого: <b>{{ store.count }}</b> товара на сумму <b>{{ store.totalPrice }} ₽</b>
        </p>
      </div>

      <button class="cart__button button button--primery" type="submit" @click.prevent="submit">
        Оформить заказ
      </button>
    </div>
    <div v-if="hasError" class="cart__error form__error-block">
      <h4>Заявка не отправлена!</h4>
      <p>Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.</p>
    </div>
  </form>
</template>

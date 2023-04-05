<script setup>
import CheckoutDelivery from './CheckoutDelivery.vue';
import CheckoutPayment from './CheckoutPayment.vue';
import SKU from '../../helpers/sku-generator';

import { useCartStore } from '../../stores/counter';
import { ref } from 'vue';

const store = useCartStore();
const hasError = ref(false);
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
          />
          <span class="form__value">ФИО</span>
        </label>

        <label class="form__label">
          <input class="form__input" type="text" name="address" placeholder="Введите ваш адрес" />
          <span class="form__value">Адрес доставки</span>
        </label>

        <label class="form__label">
          <input class="form__input" type="tel" name="phone" placeholder="Введите ваш телефон" />
          <span class="form__value">Телефон</span>
          <span class="form__error">Неверный формат телефона</span>
        </label>

        <label class="form__label">
          <input class="form__input" type="email" name="email" placeholder="Введи ваш Email" />
          <span class="form__value">Email</span>
        </label>

        <label class="form__label">
          <textarea
            class="form__input form__input--area"
            name="comments"
            placeholder="Ваши пожелания"
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
              new SKU({
                id: item.product.id,
                color: item.color.color.id,
                size: item.size.id,
              }).toString()
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

      <button class="cart__button button button--primery" type="submit">Оформить заказ</button>
    </div>
    <div class="cart__error form__error-block">
      <h4>Заявка не отправлена!</h4>
      <p>Похоже произошла ошибка. Попробуйте отправить снова или перезагрузите страницу.</p>
    </div>
  </form>
</template>
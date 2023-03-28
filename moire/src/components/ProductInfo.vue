<script setup>
import { SHOP_PHONE } from '@/config';
import { ref } from 'vue';

const activeItem = ref('about');
function isActive(menuItem) {
  return activeItem.value === menuItem;
}
function setActive(menuItem) {
  activeItem.value = menuItem;
}
</script>
<template>
  <div class="item__desc">
    <ul class="tabs">
      <li class="tabs__item">
        <a
          class="tabs__link"
          :class="{ 'tabs__link--current': isActive('about') }"
          @click.prevent="setActive('about')"
        >
          Информация о товаре
        </a>
      </li>
      <li class="tabs__item">
        <a
          class="tabs__link"
          :class="{ 'tabs__link--current': isActive('delivery') }"
          @click.prevent="setActive('delivery')"
        >
          Доставка и возврат
        </a>
      </li>
    </ul>

    <div class="item__content" :hidden="!isActive('about')">
      <h3>Состав:</h3>

      <p>
        60% хлопок<br />
        30% полиэстер<br />
      </p>

      <h3>Уход:</h3>

      <p>
        Машинная стирка при макс. 30ºC короткий отжим<br />
        Гладить при макс. 110ºC<br />
        Не использовать машинную сушку<br />
        Отбеливать запрещено<br />
        Не подвергать химчистке<br />
      </p>
    </div>
    <div class="item__content" :hidden="!isActive('delivery')">
      <h3>Доставка:</h3>

      <p>
        1. Курьерская доставка по Москве и Московской области – 290 ₽<br />
        2. Самовывоз из магазина. Список и адреса магазинов Вы можете посмотреть здесь<br />
      </p>

      <h3>Возврат:</h3>

      <p>
        Любой возврат должен быть осуществлен в течение Возвраты в магазине БЕСПЛАТНО.<br />
        Вы можете вернуть товары в любой магазин. Магазин должен быть расположен в стране, в которой
        Вы осуществили покупку. БЕСПЛАТНЫЙ возврат в Пункт выдачи заказов.<br />
        Для того чтобы вернуть товар в одном из наших Пунктов выдачи заказов, позвоните по телефону
        {{ SHOP_PHONE }}<br />
      </p>
    </div>
  </div>
</template>

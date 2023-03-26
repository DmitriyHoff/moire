<script setup>
import { BASE_API_URL } from '../config.js';
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import SizeBox from '../components/SizeBox.vue';
import { reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductColors from '../components/ProductColors.vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
const state = reactive({ product: {} });

const route = useRoute();

onMounted(async () => {
  const response = await axios.get(`${BASE_API_URL}/products/${route.params.id}`);
  state.product = response.data;
  console.log(state.product);
});
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail />
    </div>

    <section class="item">
      <ProductGallery />

      <div class="item__info">
        <span class="item__code">Артикул: {{ state.product.id }}</span>
        <h2 class="item__title">{{ state.product.title }}</h2>
        <div class="item__form">
          <form class="form" action="#" method="POST">
            <div class="item__row item__row--center">
              <div class="form__counter">
                <button type="button" aria-label="Убрать один товар">
                  <svg v-svg symbol="icon-minus" size="0 0 12 12"></svg>
                </button>

                <input type="text" value="1" name="count" />

                <button type="button" aria-label="Добавить один товар">
                  <svg v-svg symbol="icon-plus" size="0 0 12 12"></svg>
                </button>
              </div>

              <b class="item__price"> {{ state.product.price }} ₽ </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ProductColors :colors="state.product.colors" />
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label class="form__label form__label--small form__label--select">
                  <SizeBox :size-list="state.product.sizes" />
                </label>
              </fieldset>
            </div>

            <button class="item__button button button--primery" type="submit">В корзину</button>
          </form>
        </div>
      </div>

      <ProductInfo />
    </section>
  </main>
</template>

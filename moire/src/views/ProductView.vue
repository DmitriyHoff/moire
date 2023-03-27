<script setup>
import { BASE_API_URL } from '../config.js';
import BreadcrumbTrail from '../components/BreadcrumbTrail.vue';
import SizeBox from '../components/SizeBox.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import ProductColors from '../components/ProductColors.vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
const product = ref({});
const breadcrumbs = ref([]);
const route = useRoute();

onMounted(async () => {
  const currentPage = `${BASE_API_URL}/products/${route.params.id}`;
  const response = await axios.get(currentPage);
  product.value = response.data;

  breadcrumbs.value = [
    { title: 'Каталог', route: { name: 'main' } },
    {
      title: product.value.category.title,
      route: { name: 'products', query: { categoryId: product.value.category.id } },
    },
    {
      title: product.value.title,
      route: { path: '#' },
      //route: { name: 'product', params: { id: product.value.id } }
    },
  ];
  console.log(breadcrumbs.value);
});
</script>
<template>
  <main class="content container">
    <div class="content__top">
      <BreadcrumbTrail :links="breadcrumbs" />
    </div>

    <section class="item">
      <ProductGallery />

      <div class="item__info">
        <span class="item__code">Артикул: {{ product.id }}</span>
        <h2 class="item__title">{{ product.title }}</h2>
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

              <b class="item__price"> {{ product.price }} ₽ </b>
            </div>

            <div class="item__row">
              <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ProductColors :colors="product.colors" />
              </fieldset>

              <fieldset class="form__block">
                <legend class="form__legend">Размер</legend>
                <label class="form__label form__label--small form__label--select">
                  <SizeBox :size-list="product.sizes" />
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

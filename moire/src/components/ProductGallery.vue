<script setup>
defineProps(['gallery']);
</script>
<template>
  <div class="item__pics pics">
    <div class="pics__wrapper">
      <img
        width="570"
        height="570"
        src="img/product-square-1.jpg"
        srcset="img/product-square-1@2x.jpg 2x"
        alt="Название товара"
      />
    </div>
    <ul class="pics__list">
      <li class="pics__item">
        <a href="" class="pics__link pics__link--current">
          <img
            width="98"
            height="98"
            src="img/product-square-2.jpg"
            srcset="img/product-square-2@2x.jpg 2x"
            alt="Название товара"
          />
        </a>
      </li>
      <li class="pics__item">
        <a href="" class="pics__link">
          <img
            width="98"
            height="98"
            src="img/product-square-3.jpg"
            srcset="img/product-square-3@2x.jpg 2x"
            alt="Название товара"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

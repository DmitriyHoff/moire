import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';
import App from './App.vue';
import router from './router';
import { vMaska } from 'maska';

import svg from './assets/sprites.svg';
// Create our number formatter.
const formatter = new Intl.NumberFormat('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  //minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

const app = createApp(App);

// Глобальные функции форматирования текста
app.config.globalProperties.$format = {
  currRUB(value) {
    return formatter.format(value);
  },

  countText(itemsCount) {
    const count = itemsCount % 100;
    let s = '';

    if (count >= 10 && count <= 20) {
      s = 'товаров';
    } else if (count % 10 === 1) {
      s = 'товар';
    } else if (count % 10 > 1 && count % 10 < 5) {
      s = 'товара';
    } else {
      s = 'товаров';
    }
    return s;
  },
  countItemsText(itemsCount) {
    return `${itemsCount} ${this.countText(itemsCount)}`;
  },
};

app.use(createPinia());
app.use(router);
app.directive('maska', vMaska);

app.use(svgSpriteDirectivePlugin, {
  url: svg,
});
app.mount('body');

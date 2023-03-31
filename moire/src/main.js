/* eslint-disable no-undef */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';
import App from './App.vue';
import router from './router';
import svg from './assets/sprites.svg';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(svgSpriteDirectivePlugin, {
  url: svg,
});
app.mount('body');

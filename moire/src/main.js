import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { svgSpriteDirectivePlugin } from 'vue-svg-sprite';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(svgSpriteDirectivePlugin, {
  url: '/src/assets/sprites.svg',
});
app.mount('body');

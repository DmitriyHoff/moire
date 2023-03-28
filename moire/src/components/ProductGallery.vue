<script setup>
import { watch, ref, computed } from 'vue';

const props = defineProps(['colors', 'loading']);
const colors = computed(function () {
  return props.colors;
});

const activeImage = ref();

// Изменим картинку, когда данные будут полностью загружены
watch(
  () => props.loading,
  (loading) => {
    if (!loading) setActiveImage(props.colors[0].gallery);
  }
);

function setActiveImage(gallery) {
  activeImage.value = setImageSrc(gallery);
}
/**
 *
 * @param {object[]} gallery
 */
function setImageSrc(gallery) {
  if (!gallery) {
    return '/src/assets/no-image.svg';
  } else {
    return gallery[0]?.file.url;
  }
}
</script>
<template>
  <div class="item__pics pics">
    <div class="pics__wrapper">
      <img width="570" height="570" :src="activeImage" alt="Название товара" ref="img" />
    </div>
    <ul class="pics__list">
      <li v-for="color in colors" :key="color.id" class="pics__item">
        <a href="" class="pics__link pics__link--current">
          <img
            width="98"
            height="98"
            :src="setImageSrc(color.gallery)"
            :alt="color.color.title"
            @click.prevent="setActiveImage(color.gallery)"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

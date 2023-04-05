<script setup>
import { ref, computed, watch } from 'vue';
import noimgUrl from '../../assets/no-image.svg';

const props = defineProps(['colors', 'selected', 'loading']);
const colors = computed(function () {
  return props.colors;
});

const selectedIndex = ref(0);
watch(
  () => props.selected,
  () => {
    selectedIndex.value = props.colors.findIndex((x) => x.id === props.selected);
  }
);
function setImageSrc(gallery) {
  if (!gallery) {
    return noimgUrl;
  } else {
    return gallery[0]?.file.url;
  }
}
</script>
<template>
  <div class="item__pics pics">
    <div class="pics__wrapper">
      <img
        v-for="(color, index) in colors"
        :key="color.id"
        width="570"
        height="570"
        :src="setImageSrc(colors[selectedIndex].gallery)"
        alt="Название товара"
        ref="img"
        :hidden="selectedIndex !== index"
      />
    </div>
    <ul class="pics__list">
      <li v-for="(color, index) in colors" :key="color.id" class="pics__item">
        <a href="" class="pics__link" :class="index === selectedIndex ? 'pics__link--current' : ''">
          <img
            width="98"
            height="98"
            :src="setImageSrc(color.gallery)"
            :alt="color.color.title"
            @click.prevent="selectedIndex = index"
          />
        </a>
      </li>
    </ul>
  </div>
</template>

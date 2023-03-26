<!-- <script setup>
import { defineProps, computed, emit } from 'vue';
const props = defineProps(['page', 'count', 'perPage']);

const pageCount = computed(() => {
  return Math.ceil(this.count / this.perPage);
});
const isNextBtnEnabled = computed(() => {
  return this.page < this.pageCount;
});
const isPrevBtnEnabled = computed(() => {
  return this.page > 1;
});

function pagination(arg) {
  let nextPage;
  if (arg === 'next') {
    if (this.page === this.pageCount) return;
    nextPage = this.page + 1;
  } else if (arg === 'prev') {
    if (this.page === 1) return;
    nextPage = this.page - 1;
  } else {
    nextPage = arg;
  }
  emit('pagination', nextPage);
}
</script> -->

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow pagination__link--disabled"
        aria-label="Предыдущая страница"
      >
        <svg v-svg symbol="icon-arrow-left" size="0 0 8 14"></svg>
      </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--current"> 1 </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#"> 2 </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#"> 3 </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#"> 4 </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#"> ... </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link" href="#"> 10 </a>
    </li>
    <li class="pagination__item">
      <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница">
        <svg v-svg symbol="icon-arrow-right" size="0 0 8 14"></svg>
      </a>
    </li>
  </ul>
</template>

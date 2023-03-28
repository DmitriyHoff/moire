<script setup>
import { computed } from 'vue';

const props = defineProps(['page', 'count', 'perPage']);
const emit = defineEmits(['pagination']);

const pageCount = computed(() => {
  return Math.ceil(props.count / props.perPage);
});
const isNextBtnEnabled = computed(() => {
  return props.page < pageCount.value;
});
const isPrevBtnEnabled = computed(() => {
  return props.page > 1;
});

function pagination(arg) {
  let nextPage;
  if (arg === 'next') {
    if (props.page === pageCount.value) return;
    nextPage = props.page + 1;
  } else if (arg === 'prev') {
    if (props.page === 1) return;
    nextPage = props.page - 1;
  } else {
    nextPage = arg;
  }
  emit('pagination', nextPage);
}
</script>

<template>
  <ul class="catalog__pagination pagination">
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow pagination__link--disabled"
        aria-label="Предыдущая страница"
        @click.prevent="pagination('prev')"
      >
        <svg v-svg symbol="icon-arrow-left" size="0 0 8 14"></svg>
      </a>
    </li>
    <li class="pagination__item" v-for="pageNumber in pageCount" :key="pageNumber">
      <a class="pagination__link" :class="{ 'pagination__link--current': pageNumber === page }">
        {{ pageNumber }}
      </a>
    </li>
    <!-- <li class="pagination__item">
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
    </li> -->
    <li class="pagination__item">
      <a
        class="pagination__link pagination__link--arrow"
        href="#"
        aria-label="Следующая страница"
        @click.prevent="pagination('next')"
      >
        <svg v-svg symbol="icon-arrow-right" size="0 0 8 14"></svg>
      </a>
    </li>
  </ul>
</template>

<script setup>
const props = defineProps(['links']);
console.log(props.links);
function log(val) {
  console.log(val);
}
</script>
<template>
  <ul class="breadcrumbs">
    <li v-for="(link, index) in links" class="breadcrumbs__item" :key="link.title">
      <RouterLink
        v-if="index < links.length - 1"
        class="breadcrumbs__link"
        :to="link.route"
        @click="
          () => {
            $route.meta.title = link.route.meta.title;
            log(link.route);
          }
        "
      >
        {{ link.title }}
      </RouterLink>
      <span v-else class="breadcrumbs__link" style="pointer-events: none"> {{ link.title }} </span>
    </li>
  </ul>
</template>

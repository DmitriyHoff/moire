<script setup>
defineProps({ sizeList: {} });
</script>
<template>
  <select class="form__select" type="text" name="category">
    <option v-for="size in sizeList" :value="size.id" :key="size.id">{{ size.title }}</option>
  </select>
</template>

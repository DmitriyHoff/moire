<script setup>
defineProps(['colors']);
</script>
<template>
  <ul class="colors colors--black">
    <li v-for="item in colors" :key="item.id" class="colors__item">
      <label class="colors__label">
        <input
          class="colors__radio sr-only"
          type="radio"
          name="color-1"
          :value="item.color.code"
          checked="false"
        />
        <span class="colors__value" :style="`background-color: ${item.color.code}; `"> </span>
      </label>
    </li>
  </ul>
</template>

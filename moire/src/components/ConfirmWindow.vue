<script setup>
defineEmits(['confirm:ok', 'confirm:cancel']);
</script>
<template>
  <div class="modal">
    <p class="modal__text">Удалить товар из корзины?</p>

    <div class="modal__buttons">
      <button class="modal__button button button--primery" @click="$emit('confirm:ok')">
        Удалить
      </button>
      <button class="modal__button button button--second" @click="$emit('confirm:cancel')">
        Отмена
      </button>
    </div>
  </div>
</template>

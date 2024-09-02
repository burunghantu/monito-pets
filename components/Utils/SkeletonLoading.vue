<template>
  <div v-if="pulse" class="bg-gray-400 p-4 mb-2 rounded-md animate-pulse"></div>
  <div v-else class="bg-gray-200 mb-2 rounded-md">
    <div class="loader p-4"></div>
  </div>
</template>

<script setup>
defineProps({
  pulse: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.loader {
  min-height: 16px;
  border-radius: 8px;
  background-image: linear-gradient(
    to right,
    rgba(#000, 0) 5%,
    rgba(#000, 0.12),
    rgba(#000, 0) 95%
  );
  background-size: 50% auto;
  background-repeat: no-repeat;
  animation: baseloader 1s linear infinite;
  display: block;
  will-change: background;
}

@keyframes baseloader {
  0% {
    background-position-x: -100%;
  }
  100% {
    background-position-x: 200%;
  }
}
</style>

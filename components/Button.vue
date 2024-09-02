<template>
  <NuxtLinkLocale
    :to="props.to"
    :class="`btn ${
      props.isoutlined
        ? 'btn-primary-outline hover:bg-pet-primary border-pet-primary text-pet-primary'
        : 'btn-primary bg-pet-primary hover:bg-pet-primary-light'
    } rounded-full font-semibold text-sm h-12 cursor-pointer flex items-center justify-center`"
  >
    <span>{{ props.title }}</span>
    <NuxtIcon
      v-if="props.icon"
      :name="props.icon"
      class="ml-2 text-lg"
      :filled="false"
    />
  </NuxtLinkLocale>
</template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: false,
    default: '/',
  },
  isoutlined: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: false,
    default: null,
  },
})
</script>

<style></style>

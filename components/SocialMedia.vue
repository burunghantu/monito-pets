<template>
  <ul class="flex gap-6 items-center">
    <li v-for="item in socialmedia" :key="item.icon" class="hover:opacity-70">
      <a :href="item.link" target="_blank">
        <NuxtIcon :name="item.icon" />
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const socialmedia = [
  {
    icon: 'icon-facebook',
    link: 'https://facebook.com',
  },
  {
    icon: 'icon-x',
    link: 'https://twitter.com',
  },
  {
    icon: 'icon-whatsapp',
    link: 'https://whatsapp.com',
  },
  {
    icon: 'icon-youtube',
    link: 'https://youtube.com',
  },
]
</script>

<style></style>

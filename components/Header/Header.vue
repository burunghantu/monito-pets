<template>
  <header
    class="site-header"
    :class="theme.darkTheme ? 'text-white bg-gray-800' : 'bg-white'"
  >
    <div class="container">
      <NuxtLink class="site-logo" :to="localePath(`/`)">
        <NuxtImg
          src="/site-logo.png"
          alt="Monito Pets"
          width="48"
          height="48"
          quality="100"
        />
      </NuxtLink>
      <!-- end site-logo -->
    </div>
    <div class="scrim"></div>
  </header>
</template>

<script setup>
import { useThemeStore } from '~/store/global'

const theme = useThemeStore()
const localePath = useLocalePath()
</script>

<style lang="scss" scoped></style>

<template>
  <nav class="switch-locale" :class="{ 'is-active': showLangNav }">
    <button class="btn-switch mr-0" type="button" @click.prevent="toggleNav">
      <span class="text-caps">{{ locale.toLocaleUpperCase() }}</span>
      <NuxtIcon name="angle-down" />
    </button>
    <!-- button trigger -->
    <ul
      class="lang-opts p-[10px] rounded left-0"
      :class="theme.darkTheme ? 'text-white bg-gray-800' : 'bg-white'"
    >
      <li v-for="lang in locales" :key="lang.code">
        <nuxt-link :to="switchLocalePath(`${lang.code}`)" class="">
          <span class="text-caps">{{ lang.code.toLocaleUpperCase() }}</span>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { useThemeStore } from '~/store/global'
const { locales, locale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const theme = useThemeStore()

const showLangNav = ref(false)

const toggleNav = () => {
  showLangNav.value = !showLangNav.value
}

// Life Cycle
onMounted(() => {
  handleClickOutside('.switch-locale', showLangNav)
})
</script>

<style lang="scss" scoped></style>

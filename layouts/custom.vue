<template>
  <div>
    <Header />
    <!-- <ul class="skip-links">
      <li>
        <a ref="skipLink" href="#main" class="skip-link"
          >Skip to main content</a
        >
      </li>
    </ul> -->
    <slot />
    <Footer />
    <NuxtSnackbar />
  </div>
</template>

<script setup>
import { register } from 'swiper/element/bundle'
register()
const { locale } = useI18n()
const route = useRoute()
const config = useRuntimeConfig()
// const skipLink = ref()

const dayjs = useDayjs()
dayjs.locale(locale)

useHead(() => ({
  htmlAttrs: {
    lang: locale,
  },
  link: [
    {
      rel: 'canonical',
      href: `${config.public.BASE_URL}${route.path}`,
    },
  ],
}))

// watch(
//   () => route.path,
//   () => {
//     skipLink.value.focus()
//   }
// )
</script>

<style lang="scss" scoped>
.skip-link {
  white-space: nowrap;
  margin: 1em auto;
  top: 0;
  position: fixed;
  left: 50%;
  margin-left: -72px;
  opacity: 0;
  z-index: 50;
}
.skip-link:focus {
  opacity: 1;
  background-color: white;
  padding: 0.5em;
  border: 1px solid black;
}
</style>

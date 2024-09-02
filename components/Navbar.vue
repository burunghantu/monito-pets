<template>
  <nav
    class="z-50 fixed top-0 py-4 w-full mx-auto shadow-sm"
    :class="{
      'bg-white': !isHomePage,
      'bg-pet-secondary-light': isHomePage,
    }"
  >
    <div class="flex justify-between items-center container mx-auto">
      <NuxtIcon
        :name="isMobileMenuOpen ? 'close' : 'bars'"
        class="md:hidden order-1 scale-150 cursor-pointer text-pet-primary mx-6"
        @click="toggleMobileMenu"
      />
      <NuxtLinkLocale class="order-2 md:order-1" to="/">
        <NuxtImg
          class="md:h-[40px] h-[30px]"
          src="assets/img/logo.svg"
          alt="Pet Logo"
          height="40"
        />
      </NuxtLinkLocale>

      <ul
        class="md:flex md:order-2 hidden flex-col md:flex-row gap-12 text-pet-primary font-semibold"
      >
        <li v-for="menu in menus" :key="menu.name">
          <NuxtLinkLocale
            class="hover:text-pet-primary-light"
            :to="menu.path"
            >{{ menu.name }}</NuxtLinkLocale
          >
        </li>
      </ul>

      <div class="gap-4 items-center flex order-3">
        <HeaderSiteSearch class="xl:hidden text-pet-primary" />
        <Search />
        <Button class="hidden md:flex" to="/" title="Join the Community" />

        <!-- <HeaderSwitchLocale class="hidden md:block" /> -->
      </div>
    </div>

    <div
      v-if="isMobileMenuOpen"
      class="md:hidden px-10 py-4 flex flex-col"
      :class="{
        'bg-white': !isHomePage,
        'bg-pet-secondary-light': isHomePage,
      }"
    >
      <ul class="flex flex-col gap-4 text-pet-primary font-semibold">
        <li v-for="menu in menus" :key="menu.name">
          <NuxtLinkLocale
            class="hover:text-pet-primary-light"
            :to="menu.path"
            @click="toggleMobileMenu"
            >{{ menu.name }}</NuxtLinkLocale
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
const route = useRoute()
const isHomePage = computed(() => {
  const homePathPattern = /^\/(en|id)?\/\/?$/
  return homePathPattern.test(route.path)
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const menus = [
  { name: 'Home', path: '/' },
  { name: 'Category', path: '/category' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
]
</script>

<style scoped></style>

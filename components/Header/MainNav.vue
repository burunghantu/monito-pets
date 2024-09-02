<script setup>
const { locale } = useI18n()

// disini pakai useFetch (tanpa proxy), karena kita fetch dari server FE di /server/api/menus.get.js
const { data: menus } = await useFetch('/api/menus', {
  query: { locale },
})

const writeUrl = url => (!url.length ? '#' : url)
const renderSubNav = ref(false)
const showNav = ref(false)
const showSubNav = ref([])

const toggleNav = () => {
  showNav.value = !showNav.value
}

onMounted(() => {
  menus.value.forEach(() => {
    showSubNav.value.push(false)
  })

  document.addEventListener('scroll', () => {
    renderSubNav.value = true
  })

  document.addEventListener('click', () => {
    renderSubNav.value = true
  })

  document.addEventListener('mousemove', () => {
    renderSubNav.value = true
  })

  document.addEventListener('touchmove', () => {
    renderSubNav.value = true
  })

  window.onresize = () => {
    showNav.value = false
  }

  handleClickOutside('.main-nav', showNav)
})
</script>

<template>
  <nav class="main-nav" :class="{ 'is-active': showNav }">
    <button
      class="nav-trigger"
      type="button"
      aria-label="Navigation"
      @click.prevent="toggleNav"
    >
      <NuxtIcon :name="!showNav ? 'bars' : 'close'" />
    </button>
    <span v-if="!menus.length">Kosong cuk</span>
    <ul v-else class="mb-0">
      <li
        v-for="(nav, i) in menus"
        :key="i"
        :class="{ 'parent-nav': nav.children.length }"
        class="main-nav__item"
      >
        <span v-if="!nav.children.length">
          <NuxtLinkLocale :to="writeUrl(nav.slug)">
            {{ nav.title }}
          </NuxtLinkLocale>
        </span>
        <template v-else>
          <span>
            <NuxtLinkLocale :to="writeUrl(nav.slug)">
              {{ nav.title }}
            </NuxtLinkLocale>
            <button
              class="nav-arrow"
              type="button"
              @click.prevent="showSubNav[i] = !showSubNav[i]"
            >
              <NuxtIcon name="angle-right" />
            </button>
          </span>
          <LazyHeaderSubNav
            v-if="nav.children.length && renderSubNav"
            :parent-slug="nav.slug"
            :sub-nav="nav.children"
            :class="{ 'is-active': showSubNav[i] }"
          />
        </template>
      </li>
    </ul>
  </nav>
</template>

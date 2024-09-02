<script setup>
const props = defineProps({
  subNav: {
    type: Array,
    default: () => [],
  },
  parentSlug: {
    type: String,
    default: () => '/',
  },
})
const showSubNav = ref([])
props.subNav.forEach(() => {
  showSubNav.value.push(false)
})
</script>

<template>
  <div class="sub-nav">
    <ul class="mb-0">
      <li
        v-for="(nav, i) in props.subNav"
        :key="i"
        :class="{ 'parent-nav': nav.children.length }"
      >
        <NuxtLinkLocale v-if="!nav.children.length" :to="parentSlug + nav.slug">
          {{ nav.title }}
        </NuxtLinkLocale>
        <template v-else>
          <span>
            <NuxtLinkLocale :to="parentSlug + nav.slug">
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
          <HeaderSubNav
            v-if="nav.children.length"
            :parent-slug="parentSlug + nav.slug"
            :sub-nav="nav.children"
            :class="{ 'is-active': showSubNav[i] }"
          />
        </template>
      </li>
    </ul>
  </div>
</template>

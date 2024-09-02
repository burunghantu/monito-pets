<template>
  <ul class="list-nostyle breadcrumbs">
    <li>
      <nuxt-link to="/" aria-label="Go Home Page">
        <nuxt-icon name="icons-home" />
      </nuxt-link>
    </li>
    <li v-for="(item, index) in crumbs" :key="index">
      <span class="divider">/</span>
      <span v-if="item.url === null || index === crumbs.length - 1">{{
        item.title
      }}</span>
      <nuxt-link v-else :to="item.url" :aria-label="`Go to ${item.title}`">{{
        item.title
      }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'BreadCrumbs',
  props: {
    removeIndexes: {
      type: Array,
      default: () => [],
      // :remove-indexes=
      // "[ index1, index2, ... ]"
    },
    removeUrl: {
      type: Array,
      default: () => [],
      // :remove-url=
      // "[ index1, index2, ... ]"
    },
    customTitles: {
      type: Array,
      default: () => [],
      // :custom-titles=
      // "[{ index: ..., newVal: ... }, {...}]"
    },
    formatUrlEncode: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    crumbs() {
      const newItems = []
      const pathsItem = []
      const fullPath = this.$route.path
      const items = fullPath.split('/')

      items.shift()

      items.forEach((b, i) => {
        if (!this.removeIndexes.includes(i)) {
          newItems.push(b)
          b = b.split('-').join(' ')

          const url = newItems.slice(0, i + 1).toString()

          // Custom Title
          const customTitle =
            this.customTitles?.find(item => item.index === i) || null
          if (customTitle) b = customTitle?.newVal || b

          pathsItem.push({
            title: b,
            url: this.removeUrl.includes(i)
              ? null
              : '/' + url.split(',').join('/'),
          })
        }
      })

      // Remove Locale from breadcrumbs
      pathsItem.shift()
      return pathsItem
    },
  },
}
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  align-items: center;
  text-transform: capitalize;
  // margin-top: 40px;
  margin-bottom: 40px;

  .icon-crumbs {
    display: inline-block;
    padding: 0 4px;
  }

  .divider {
    margin: 0 10px;
  }

  .divider {
    margin: 0 10px;
  }

  li a {
    color: $primary;
  }
}
</style>

<template>
  <nav class="pagination mt-10">
    <ol class="list-nostyle flex gap-4 items-center justify-center">
      <li>
        <button
          type="button"
          :disabled="currentPage === 1"
          class="border-green-700 border rounded py-2 px-4"
          @click.prevent="pagechanged(1)"
        >
          &laquo;
        </button>
      </li>
      <li v-for="(page, pi) in pages()" :key="pi">
        <button
          type="button"
          :disabled="page.isDisabled"
          class="border-green-700 border rounded py-2 px-4"
          :class="{ 'bg-green-700 text-white': currentPage === page.name }"
          @click.prevent="pagechanged(page.name)"
        >
          {{ page.name }}
        </button>
        <!-- <NuxtLink :to="page.name">{{ page.name }}</NuxtLink> -->
      </li>
      <li>
        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="border-green-700 border rounded py-2 px-4"
          @click.prevent="pagechanged(totalPages)"
        >
          &raquo;
        </button>
      </li>
    </ol>
    <ol class="list-nostyle flex gap-4 items-center justify-center">
      <li>
        <NuxtLink
          :to="{ query: firstQuery }"
          :class="{ 'is-disabled': currentPage === 1 }"
          >&laquo;</NuxtLink
        >
      </li>
      <li v-for="(q, i) in queries" :key="i">
        <NuxtLink
          :to="{ query: q.query }"
          :class="{ 'is-active': q.isActive }"
          >{{ q.query.p }}</NuxtLink
        >
      </li>
      <li>
        <NuxtLink
          :to="{ query: lastQuery }"
          :class="{ 'is-disabled': currentPage === totalPages }"
          >&raquo;</NuxtLink
        >
      </li>
    </ol>
    <pre><code>{{ queries }}</code></pre>
  </nav>
</template>

<script setup>
const router = useRouter()
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 5
  },
  totalPages: {
    type: Number,
    required: true
  },
  totalItems: {
    type: Number,
    required: true
  },
  // perPage: {
  // 	type: Number,
  // 	required: true
  // },
  currentPage: {
    type: Number,
    required: true
  }
})

const startPage = () => {
  if (props.currentPage === 1) {
    return 1
  }

  if (props.currentPage === props.totalPages) {
    return props.totalPages - props.maxVisibleButtons + 1
  }

  return props.currentPage - 1
}
const endPage = () => {
  return Math.min(startPage() + props.maxVisibleButtons - 1, props.totalPages)
}
const pages = () => {
  const range = []

  for (let i = startPage(); i <= endPage(); i += 1) {
    range.push({
      name: i,
      isDisabled: i === props.currentPage
    })
  }

  return range
}
const watchQuery = useRoute().query

const queries = ref([])
const firstQuery = {
  ...watchQuery,
  p: 1
}

const lastQuery = {
  ...watchQuery,
  p: props.totalPages
}

for (let i = startPage(); i <= endPage(); i += 1) {
  queries.value.push({
    query: {
      ...watchQuery,
      p: i
    },
    isActive: i === props.currentPage
  })
}

// eslint-disable-next-line no-unused-vars
const isInFirstPage = props.currentPage === 1
// eslint-disable-next-line no-unused-vars
const isInLastPage = props.currentPage === props.totalPages

// METHODS
// eslint-disable-next-line no-unused-vars
const goToPage = number => {
  router.push({
    query: {
      p: number
    }
  })
}

const emit = defineEmits(['pagechanged'])

const pagechanged = pNumber => {
  emit('pagechanged', pNumber)
}
</script>

<style lang="scss" scoped>
.pagination {
  display: block;

  ol {
    text-align: center;
    display: block;
  }
  li {
    display: inline-block;
  }
}
</style>

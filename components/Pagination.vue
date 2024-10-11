<template>
  <nav class="mt-10">
    <ul class="list-nostyle flex gap-4 items-center justify-center">
      <li>
        <button
          type="button"
          :disabled="currentPage === 1"
          class="flex items-center justify-center"
          @click.prevent="pagechanged(currentPage - 1)"
        >
          <NuxtIcon
            name="arrow-left-pagination"
            class="text-[32px] w-8 h-8 md:w-9 md:h-9 md:text-4xl"
            :class="{
              'text-[#B3B7C6]': currentPage === 1,
              ' text-pet-primary': currentPage !== 1,
            }"
            filled
          />
        </button>
      </li>
      <li v-for="(item, pi) in pages()" :key="pi">
        <button
          type="button"
          :disabled="item.isDisabled"
          class="rounded-lg w-[34px] h-[34px] font-bold"
          :class="{ 'bg-pet-primary text-white': currentPage === item.name }"
          @click.prevent="pagechanged(item.name)"
        >
          {{ item.name }}
        </button>
      </li>
      <li class="p-0">
        <button
          type="button"
          :disabled="currentPage === totalPages"
          class="flex items-center justify-center"
          @click.prevent="pagechanged(currentPage + 1)"
        >
          <NuxtIcon
            name="arrow-right-pagination"
            class="text-[32px] w-8 h-8 md:w-9 md:h-9 md:text-4xl"
            :class="{
              ' text-[#B3B7C6]': currentPage === totalPages,
              ' text-pet-primary': currentPage !== totalPages,
            }"
            filled
          />
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const router = useRouter()
const props = defineProps({
  maxVisibleButtons: {
    type: Number,
    required: false,
    default: 5,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
})

const page = computed(() =>
  Math.ceil(props.currentPage / props.maxVisibleButtons),
)
const startPage = () => {
  return page.value * props.maxVisibleButtons - (props.maxVisibleButtons - 1)
}
const endPage = () => {
  return Math.min(page.value * props.maxVisibleButtons, props.totalPages)
}

const pages = () => {
  const range = []
  const totalPages = props.totalPages
  const currentPage = props.currentPage
  const maxVisibleButtons = props.maxVisibleButtons

  // Menentukan rentang awal, tengah, dan akhir
  const leftBound = Math.max(1, currentPage - 2) // 2 halaman sebelum halaman saat ini
  const rightBound = Math.min(totalPages, currentPage + 2) // 2 halaman setelah halaman saat ini

  // Jika halaman pertama bukan bagian dari rentang yang ditampilkan
  if (leftBound > 1) {
    range.push({ name: 1, isDisabled: currentPage === 1 })
    if (leftBound > 2) {
      range.push({ name: '...', isDisabled: true }) // Menambahkan titik-titik
    }
  }

  // Menambahkan halaman yang berada di sekitar halaman aktif
  for (let i = leftBound; i <= rightBound; i++) {
    range.push({
      name: i,
      isDisabled: i === currentPage,
    })
  }

  // Jika halaman terakhir bukan bagian dari rentang yang ditampilkan
  if (rightBound < totalPages) {
    if (rightBound < totalPages - 1) {
      range.push({ name: '...', isDisabled: true }) // Menambahkan titik-titik
    }
    range.push({ name: totalPages, isDisabled: currentPage === totalPages })
  }

  return range
}

const watchQuery = useRoute().query

const queries = ref([])
// const firstQuery = {
//   ...watchQuery,
//   p: 1,
// }

// const lastQuery = {
//   ...watchQuery,
//   p: props.totalPages,
// }

for (let i = startPage(); i <= endPage(); i += 1) {
  queries.value.push({
    query: {
      ...watchQuery,
      p: i,
    },
    isActive: i === props.currentPage,
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
      p: number,
    },
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

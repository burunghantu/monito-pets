<template>
  <div>
    <CategoryFilter
      v-if="isFilterVisible"
      class="md:hidden bg-white fixed p-6 left-0 top-10 z-30"
    />
    <NuxtIcon
      v-if="isFilterVisible"
      class="fixed top-28 right-10 z-40 md:hidden text-pet-primary cursor-pointer self-end"
      title="Close"
      name="close"
      @click="toggleFilter"
    />
    <div
      class="flex flex-col-reverse md:flex-row md:items-end justify-between gap-12"
    >
      <div class="flex items-center gap-3">
        <h2 class="text-xl font-bold text-pet-primary">{{ title }}</h2>
        <p class="text-slate-500 text-sm">{{ pets.length }} Pets</p>
      </div>
      <div class="flex justify-between">
        <FormSelect v-model="sort" :options="options" />
        <button class="flex md:hidden gap-2 items-center" @click="toggleFilter">
          <NuxtImg
            src="/assets/img/filter.svg"
            alt="filter"
            width="16"
            height="16"
            class="text-pet-primary"
          />
          <span class="font-semibold text-pet-primary">Filter</span>
        </button>
      </div>
    </div>
    <div
      v-if="pets.length === 0"
      class="mt-64 w-[calc(100vw-64px)] md:w-full h-64"
    >
      <p class="text-center text-slate-500">No pets found</p>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <Card v-for="pet in pets" :key="pet.id" :data="pet" />
    </div>
  </div>
</template>

<script setup>
const options = [
  { text: 'Sort by', value: null },
  { text: 'Newest', value: 'newest' },
  { text: 'Oldest', value: 'oldest' },
]

const route = useRoute()
const router = useRouter()

const sort = ref(route.query.sort || null)
const slug = toRef(route.params, 'slug')

watch(sort, newSort => {
  router.push({ query: { ...route.query, sort: newSort } })
})

const title = ref(
  slug.value
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' '),
)

const apiUrl = computed(() => {
  const base = `/api/get-pets?category=${slug.value}`
  const query = []

  // Add query parameters
  if (route.query.gene) {
    const genes = Array.isArray(route.query.gene)
      ? route.query.gene
      : [route.query.gene]
    genes.forEach(gene => query.push(`gene=${encodeURIComponent(gene)}`))
  }
  if (route.query.color) {
    const colors = Array.isArray(route.query.color)
      ? route.query.color
      : [route.query.color]
    colors.forEach(color => query.push(`color=${encodeURIComponent(color)}`))
  }
  if (route.query.minPrice) {
    query.push(`minPrice=${encodeURIComponent(route.query.minPrice)}`)
  }
  if (route.query.maxPrice) {
    query.push(`maxPrice=${encodeURIComponent(route.query.maxPrice)}`)
  }
  if (route.query.sort) {
    query.push(`sort=${encodeURIComponent(route.query.sort)}`)
  }

  return `${base}&${query.join('&')}`
})

const { data: pets, refresh } = await useFetch(apiUrl)

watch([sort, slug], () => {
  refresh()
})

const isFilterVisible = ref(false)

const toggleFilter = () => {
  isFilterVisible.value = !isFilterVisible.value
}
</script>

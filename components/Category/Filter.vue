<template>
  <div
    class="flex flex-col w-screen md:w-full gap-2 h-screen md:sticky md:top-24"
  >
    <h3 class="text-xl mb-8 font-bold text-pet-primary">Filter</h3>
    <div class="flex flex-col gap-3">
      <h2 class="text-black font-semibold">Gender</h2>
      <FormCheckBox v-model="filters.gender" label="Male" value="male" />
      <FormCheckBox
        v-model="filters.gender"
        label="Female"
        value="female"
      />
    </div>
    <hr class="border-t border-slate-200" />
    <div class="flex flex-col gap-3">
      <h2 class="text-black font-semibold">Color</h2>
      <FormCheckBox
        v-model="filters.colors"
        label="Red"
        value="red"
        color="bg-red"
      />
      <FormCheckBox
        v-model="filters.colors"
        label="Apricot"
        value="apricot"
        color="bg-[#FFB672]"
      />
      <FormCheckBox
        v-model="filters.colors"
        label="Black"
        value="black"
        color="bg-black"
      />
      <FormCheckBox
        v-model="filters.colors"
        label="Silver"
        value="silver"
        color="bg-[#CECECE]"
      />
      <FormCheckBox
        v-model="filters.colors"
        label="Tan"
        value="tan"
        color="bg-[#FFF7CE]"
      />
    </div>
    <hr class="border-t border-slate-200" />
    <div class="flex flex-col gap-3">
      <h2 class="text-black font-semibold">Price</h2>
      <div class="flex gap-3 items-center">
        <FormInputField
          id="min-price"
          v-model="filters.minPrice"
          type="number"
          placeholder="Min Price"
        />
        <FormInputField
          id="max-price"
          v-model="filters.maxPrice"
          type="number"
          placeholder="Max Price"
        />
      </div>
    </div>
    <hr class="border-t border-slate-200" />
    <button
      class="mt-4 px-4 py-2 bg-pet-primary text-white rounded-md"
      @click="applyFilters"
    >
      Apply Filters
    </button>
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'

const filters = ref({
  gender: [],
  colors: [],
  minPrice: '',
  maxPrice: '',
})

const router = useRouter()
const route = useRoute()

onMounted(() => {
  filters.value.gender = route.query.gene ? [].concat(route.query.gene) : []
  filters.value.colors = route.query.color ? [].concat(route.query.color) : []
  filters.value.minPrice = route.query.minPrice || ''
  filters.value.maxPrice = route.query.maxPrice || ''
})

watch(
  () => route.query,
  () => {
    filters.value.gender = route.query.gene ? [].concat(route.query.gene) : []
    filters.value.colors = route.query.color ? [].concat(route.query.color) : []
    filters.value.minPrice = route.query.minPrice || ''
    filters.value.maxPrice = route.query.maxPrice || ''
  },
  { immediate: true },
)

const applyFilters = () => {
  router.push({
    query: {
      ...router.currentRoute.value.query,
      gene: filters.value.gender.length ? filters.value.gender : null,
      color: filters.value.colors.length ? filters.value.colors : null,
      minPrice: filters.value.minPrice || null,
      maxPrice: filters.value.maxPrice || null,
    },
  })
}
</script>

<style scoped></style>

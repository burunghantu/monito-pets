<template>
  <div v-if="category" class="container relative mx-auto">
    <Breadcrumbs class="text-slate-500" />
    <HomeBannerV1
      img="group-of-dogs"
      width="650"
      height="300"
      left="md:left-20"
      background="bg-pet-secondary-light"
      rectangle1="bg-pet-primary"
      rectangle2="bg-pet-secondary"
      textcolor="text-white"
      pcolor="text-slate-200"
      buttoncolor="bg-white text-pet-primary"
      buttonoutlinedcolor="border-white text-white hover:bg-white hover:text-pet-primary"
    />
    <div class="flex mt-8 w-full justify-center gap-10">
      <CategoryFilter class="basis-1/4 sticky top-0 hidden md:block" />
      <CategoryPetList class="md:basis-3/4" />
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: categories } = await useFetch('/api/get-categories')

if (categories.value) {
  categories.value.unshift({
    label: 'All',
    value: 'all',
    slug: 'all',
  })
}

const category = ref(
  categories.value.find(item => item.slug === route.params.slug),
)

if (!category.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found',
  })
}

defineI18nRoute({
  paths: {
    id: '/kategori/[slug]',
    en: '/category/[slug]',
  },
})
</script>

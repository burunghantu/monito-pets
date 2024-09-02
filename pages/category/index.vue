<template>
  <div class="container">
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
      data-aos="fade"
    />

    <LazyCategoryList class="mt-12" />

    <HomePetList class="my-16" />
  </div>
</template>

<script lang="ts" setup>
defineI18nRoute({
  paths: {
    id: '/kategori',
    en: '/category',
  },
})
</script>

<style></style>

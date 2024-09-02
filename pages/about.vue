<template>
  <div class="py-8">
    <div class="container gap-6 mt-64 mx-auto flex flex-col">
      <HomeBannerV1 class="mt-20" data-aos="fade-right" />
      <HomeBannerV2 data-aos="fade-left" />
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
        data-aos="fade-right"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineI18nRoute({
  paths: {
    id: '/tentang-kami',
    en: '/about',
  },
})
</script>

<style></style>

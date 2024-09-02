<template>
  <div>
    <HomeHero />
    <div class="container mx-auto p-6 flex flex-col gap-8">
      <LazyHomePetList />
      <LazyHomeBannerV1 />
      <LazyHomeProductList />
      <LazyHomeBrandList data-aos="fade-up" />
      <LazyHomeBannerV2 />
      <LazyHomeBlogList />
    </div>
  </div>
</template>

<script setup>
const metaContent = {
  title: 'Pets',
}

useMeta({
  title: metaContent.title,
})
</script>

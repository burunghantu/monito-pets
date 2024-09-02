<template>
  <section>
    <HomeSectionHeader
      heading="Pet Sellers"
      subheading="Proud to be part of"
      link="/"
      textbutton="View All our Sellers"
      row
    />
    <div
      id="scrolling-logos"
      class="w-full inline-flex mt-8 flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        id="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li v-for="brand in brands" :key="brand.id">
          <NuxtImg
            :src="brand.logo"
            :alt="brand.name"
            class="mx-4 h-32"
            loading="lazy"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
const { data: brands } = await useFetch('/api/get-brands')

onMounted(() => {
  const ul = document.getElementById('logos')
  const clonedUl = ul.cloneNode(true)
  clonedUl.setAttribute('aria-hidden', 'true')
  ul.parentNode.appendChild(clonedUl)
})
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-infinite-scroll {
  animation: scroll 20s linear infinite;
}
</style>

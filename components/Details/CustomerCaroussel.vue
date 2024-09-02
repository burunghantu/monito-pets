<template>
  <div>
    <h2 class="font-bold text-2xl text-slate-900 mb-8">Our Lovely Customers</h2>
    <div class="swiper-container-custom">
      <Swiper
        class="swiper-container"
        :modules="[Pagination]"
        :slides-per-view="5"
        :breakpoints="{
          360: { slidesPerView: 3 },
          500: { slidesPerView: 4 },
          768: { slidesPerView: 5 },
        }"
        :free-mode="true"
        :space-between="10"
        :pagination="{
          el: '.swiper-pagination-custom',
          clickable: true,
        }"
        @slide-change="updateBulletStyles"
        @pagination-update="updateBulletStyles"
      >
        <SwiperSlide v-for="(img, index) in customers" :key="`main-${index}`">
          <NuxtImg :src="img" width="248" class="rounded-xl" loading="lazy" />
        </SwiperSlide>
      </Swiper>
      <div class="swiper-pagination-custom mt-4"></div>
    </div>
  </div>
</template>

<script setup>
import { Pagination } from 'swiper/modules'

const customers = [
  '/customer-1.png',
  '/customer-2.png',
  '/customer-3.png',
  '/customer-4.png',
  '/customer-5.png',
  '/customer-2.png',
  '/customer-3.png',
  '/customer-4.png',
]

const updateBulletStyles = () => {
  const bullets = document.querySelectorAll(
    '.swiper-pagination-custom .swiper-pagination-bullet',
  )
  bullets.forEach(bullet => {
    if (bullet.classList.contains('swiper-pagination-bullet-active')) {
      bullet.style.backgroundColor = '#003459'
      bullet.style.width = '22px'
      bullet.style.height = '9px'
      bullet.style.borderRadius = '5px'
    } else {
      bullet.style.backgroundColor = '#99A2A5'
      bullet.style.width = '9px'
      bullet.style.height = '9px'
      bullet.style.borderRadius = '5px'
    }
  })
}

onMounted(() => {
  updateBulletStyles()
})
</script>

<style scoped>
.swiper-container-custom {
  position: relative;
  padding-bottom: 30px;
}

.swiper-pagination-custom {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
}
</style>

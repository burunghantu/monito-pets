<template>
  <div class="swiper-container relative w-auto md:max-w-[520px]">
    <Swiper
      ref="mainSwiperRef"
      :modules="[SwiperNavigation]"
      :slides-per-view="1"
      :space-between="10"
      :navigation="{
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }"
      class="main-swiper"
      @slide-change="onSlideChangeMain"
      @swiper="onMainSwiperInit"
    >
      <SwiperSlide v-for="(img, index) in images" :key="`main-${index}`">
        <NuxtImg :src="img" width="600" class="rounded-xl" />
      </SwiperSlide>
    </Swiper>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <Swiper
      ref="thumbsSwiperRef"
      :modules="[SwiperThumbs, SwiperNavigation]"
      :slides-per-view="2"
      :breakpoints="{
        360: { slidesPerView: 3 },
        500: { slidesPerView: 4 },
        768: { slidesPerView: 5 },
      }"
      :free-mode="true"
      class="thumbs-swiper"
      @slide-change="onSlideChangeThumbs"
      @swiper="onThumbsSwiperInit"
    >
      <SwiperSlide v-for="(img, index) in images" :key="`thumb-${index}`">
        <NuxtImg
          :src="img"
          width="100"
          :class="[
            'thumbnail-image',
            { 'selected-thumbnail': currentIndex === index },
          ]"
          @click="onThumbnailClick(index)"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
defineProps({
  images: {
    type: Array,
    required: true,
  },
})

const currentIndex = ref(0)

const thumbsSwiper = ref(null)
const mainSwiper = ref(null)

const onThumbsSwiperInit = swiper => {
  thumbsSwiper.value = swiper
}

const onMainSwiperInit = swiper => {
  mainSwiper.value = swiper
}

const onSlideChangeThumbs = swiper => {
  currentIndex.value = swiper.activeIndex
}

const onSlideChangeMain = swiper => {
  currentIndex.value = swiper.activeIndex
}

watch(currentIndex, newIndex => {
  if (mainSwiper.value) {
    mainSwiper.value.slideTo(newIndex)
  }
  if (thumbsSwiper.value) {
    thumbsSwiper.value.slideTo(newIndex)
  }
})

const onThumbnailClick = index => {
  currentIndex.value = index
}
</script>

<style scoped>
.main-swiper {
  margin-bottom: 15px;
}

.thumbs-swiper {
  display: flex;
  justify-content: start;
  align-items: center;
}

.swiper-slide {
  width: 100%;
  height: 100%;
}

.swiper-button-prev,
.swiper-button-next {
  color: #fff;
  position: absolute;
  margin: -20px 20px;
  top: 45%; 
  width: 40px;
  height: 40px;
  z-index: 10;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 100%;
  font-size: 12px;
}

.swiper-button-prev::after,
.swiper-button-next::after {
  font-size: 20px;
  font-weight: 700;
}

.swiper-slide-thumb-active .thumbnail-image,
.thumbnail-image:hover {
  border-color: #f1d092;
}

.thumbnail-image {
  cursor: pointer;
  border: 3px solid transparent;
  transition: border-color 0.3s;
  border-radius: 6px;
  width: 94px;
  height: 94px;
}

.selected-thumbnail {
  border-color: #f1d092;
}
</style>

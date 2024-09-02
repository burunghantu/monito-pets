<template>
  <div v-if="show" class="relative w-full bg-primary text-white overflow-hidden" :class="{ 'rounded-lg': props.rounded }">
    <div class="w-full flex">
      <div class="max-w-[1000px] w-full mx-auto flex flex-col gap-2 p-4 md:flex-row md:items-center md:justify-center">
        <p class="mr-10 md:mr-2">
          {{ data.text }}
        </p>
  
        <NuxtLinkLocale :to="data.link" class="min-w-[140px] btn bg-primary-600 shadow-none hover:bg-primary-700 md:py-1 md:px-5 md:h-fit">
          <span class="">{{ data.linkText }}</span>
        </NuxtLinkLocale>
      </div>

      <div class="absolute top-4 right-5 md:static md:mr-2 md:mt-2">
        <div class='w-6 h-6 flex rounded-full cursor-pointer transition-colors hover:bg-primary-400'>
          <nuxt-icon name="close-thin" class="text-2xl" @click="show = false"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    data: {
      type: Object,
      required: true,
    },
    rounded: {
      type: Boolean,
      default: true,
    },
  })

  const show = ref(true)
</script>
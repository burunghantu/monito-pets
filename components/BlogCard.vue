<template>
  <NuxtLinkLocale
    :to="`/blogs/${props.data.slug}`"
    class="flex flex-col justify-between gap-4 bg-white shadow-pet-card rounded-lg p-3 transition-all hover:opacity-70 cursor-pointer"
  >
    <NuxtImg
      :src="props.data.thumbnail"
      :alt="props.data.name"
      height="200"
      class="rounded-lg bg-cover w-full"
      loading="lazy"
    />
    <div class="flex flex-col gap-2">
      <div class="relativ">
        <div class="bg-blue-400 px-4 py-1 rounded-full absolute">
          <p class="text-white text-xs font-bold">{{ props.data.category }}</p>
        </div>
      </div>
      <h3 class="font-bold text mt-6">{{ props.data.title }}</h3>
      <p class="text-sm line-clamp-3 text-slate-900">
        {{ props.data.descriptions }}
      </p>
    </div>
  </NuxtLinkLocale>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})
</script>

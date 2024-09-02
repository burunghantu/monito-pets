<template>
  <NuxtLinkLocale :to="`/category/${props.category.slug}`">
    <div class="bg-slate-50 hover:bg-slate-100 transition rounded-lg p-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <img
            :src="props.category.img"
            alt="category.name_id"
            class="w-12 h-12 object-cover rounded-full"
          />
          <div class="ml-4">
            <h3 class="text-lg font-semibold">{{ props.category.name_en }}</h3>
            <p class="text-sm text-gray-500">{{ props.category.name_id }}</p>
          </div>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-500 -rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
    </div>
  </NuxtLinkLocale>
</template>

<script setup>
const props = defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

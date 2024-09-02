<template>
  <NuxtLinkLocale
    :to="
      props.data.bonus
        ? `/product/${props.data.id}`
        : `/details/${props.data.id}`
    "
    :params="{ id: props.data.id }"
    class="flex flex-col justify-between gap-2 bg-white shadow-pet-card rounded-lg p-3 pb-5 transition-all hover:opacity-70 cursor-pointer"
  >
    <NuxtImg
      :src="props.data.thumbnail"
      :alt="props.data.name"
      height="200"
      class="rounded-lg bg-cover w-full"
      loading="lazy"
    />
    <div class="flex flex-col gap-2">
      <h3 class="font-bold text">{{ props.data.name }}</h3>
      <div class="flex flex-col md:flex-row gap-2 text-sm">
        <p v-if="props.data.gene" class="text-slate-600">
          Gene: <strong>{{ props.data.gene }}</strong>
        </p>
        <span v-if="props.data.age" class="hidden md:block">•</span>
        <p v-if="props.data.age" class="text-slate-600">
          Age: <strong>{{ props.data.age }} Months</strong>
        </p>
        <p v-if="props.data.product" class="text-slate-600">
          Product: <strong>{{ props.data.product }}</strong>
        </p>
        <span v-if="props.data.size" class="hidden md:block">•</span>
        <p v-if="props.data.size" class="text-slate-600">
          Size: <strong>{{ props.data.size }}</strong>
        </p>
      </div>
      <p class="font-bold text">IDR {{ formatPrice(props.data.price) }}</p>
    </div>
    <div
      v-if="props.data.bonus"
      class="bg-pet-secondary-light p-2 items-center flex gap-2 rounded-lg"
    >
      <NuxtImg
        src="assets/img/bonus.svg"
        alt="Bonus"
        width="20"
        height="20"
        class="bg-cover"
      />
      <span>•</span>
      <p class="text-sm font-bold text-slate-900">
        {{ props.data.bonus }}
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

const formatPrice = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
</script>

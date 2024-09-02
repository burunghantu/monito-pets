<template>
  <div class="flex justify-between items-center">
    <div class="flex" :class="row ? 'flex-row gap-2 items-center' : 'flex-col'">
      <p>{{ props.subheading }}</p>
      <h3 class="font-bold text-xl text-pet-primary">{{ props.heading }}</h3>
    </div>
    <Button
      v-if="!displayAll"
      class="hidden md:flex"
      :title="props.textbutton"
      :link="props.link"
      :to="props.link"
      isoutlined
      icon="angle-right"
    />
  </div>
</template>

<script setup>
const props = defineProps({
  heading: {
    type: String,
    required: true,
  },
  subheading: {
    type: String,
    required: true,
  },
  textbutton: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  row: {
    type: Boolean,
    default: false,
  },
  displayAll: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div>
    <label :for="props.id" class="block text-gray-700 text-sm font-bold mb-2">
      {{ label }}
    </label>
    <textarea
      :id="props.id"
      :placeholder="props.placeholder"
      class="border border-gray-300 rounded-md p-2 w-full h-56 focus:ring-pet-secondary focus:border-pet-secondary  "
      :value="value"
      @input="emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script setup>
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  value: {
    type: String,
    required: false,
    default: '',
  },
})

const emit = defineEmits(['input'])
</script>

<style></style>

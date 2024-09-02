<template>
  <label class="inline-flex items-center space-x-2">
    <input
      type="checkbox"
      class="h-4 w-4 rounded border-slate-300 border-2 text-pet-primary focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent"
      :value="value"
      :checked="modelValue.includes(value)"
      @change="toggleCheck"
    />
    <span v-if="color" :class="`w-3 h-3 ${color} rounded-full`"></span>
    <span class="text-gray-900 font-medium text-sm">{{ label }}</span>
  </label>
</template>

<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    required: false,
    default: null,
  },
})

const emit = defineEmits(['update:modelValue'])

const toggleCheck = event => {
  const newValue = [...props.modelValue]
  if (event.target.checked) {
    newValue.push(props.value)
  } else {
    const index = newValue.indexOf(props.value)
    if (index > -1) {
      newValue.splice(index, 1)
    }
  }
  emit('update:modelValue', newValue)
}
</script>

<style scoped></style>

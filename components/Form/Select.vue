<template>
  <v-select
    :options="props.options"
    label="text"
    class="w-44 custom-select"
    :reduce="option => option.value"
  >
    <template #selected="option">
      <span>{{ option.text }}</span>
    </template>
    <template #option="option">
      <span>{{ option.text }} </span>
    </template>
  </v-select>
</template>

<script setup>

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
})
</script>

<style lang="scss" scoped>
.custom-select {
  :deep(.vs__search::placeholder),
  :deep(.vs__dropdown-toggle) {
    border-radius: 20px;
    font-size: 14px;
    padding-left: 5px;
    padding-right: 5px;
  }

  :deep(.vs__dropdown-menu) {
    border-radius: 10px;
    font-size: 14px;
  }

  :deep(.vs__clear),
  :deep(.vs__open-indicator) {
    fill: #dcdcdf;
  }

  :deep(.vs__dropdown-menu .vs__dropdown-option:hover),
  :deep(.vs__dropdown-menu .vs__dropdown-option:focus) {
    background-color: #00528c;
    color: #fff;
  }
}
</style>

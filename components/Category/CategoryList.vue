<template>
  <div>
    <div class="grid grid-cols-2 gap-4">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="category.id"
        :category="category"
        data-aos="fade-left"
        :data-aos-delay="index * 150"
      />
    </div>
  </div>
</template>

<script setup>
const { data: categories } = await useFetch('/api/get-categories')
</script>

<style></style>

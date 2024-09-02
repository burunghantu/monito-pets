<template>
  <div class="relative w-[280px] hidden xl:block">
    <NuxtIcon
      name="search"
      class="absolute left-5 top-1/2 transform -translate-y-1/2 text-slate-400"
    />
    <input
      type="text"
      class="w-full bg-slate-50 border-none pl-12 pr-4 py-3 rounded-full border border-pet-primary-light focus:ring-pet-primary-light focus:border-pet-primary-light"
      placeholder="Search something here!"
    />
  </div>
</template>

<script lang="ts" setup></script>

<style></style>

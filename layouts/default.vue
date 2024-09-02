<template>
  <div>
    <Navbar />
    <main class="min-h-screen">
      <slot />
    </main>
    <Footer />
    <SpeedInsights/>
  </div>
</template>

<script lang="ts" setup>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"
</script>

<style></style>

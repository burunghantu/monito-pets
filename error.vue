<script setup>
const error = useError()

const localePath = useLocalePath()

const handleError = () => {
  clearError({
    redirect: `${localePath('/')}`
  })
}
</script>

<template>
  <div class="flex h-screen justify-center items-center">
    <div class="container mx-auto text-center">
      <h1 class="font-bold text-9xl mb-2">
        {{ error.statusCode }}
      </h1>
      <p class="mt-1 text-2xl">
        {{ error.message }}
      </p>
      <button class="btn--primary" @click="handleError">Go Back</button>
    </div>
  </div>
</template>

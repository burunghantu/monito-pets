<template>
  <div v-if="post" class="min-h-screen container mx-auto py-8 px-4 md:px-0">
    <Breadcrumbs />
    <h1 class="text-3xl font-bold text-gray-900 mt-6">{{ post.title }}</h1>
    <div class="flex gap-4 items-center text-sm text-gray-500">
      <span>Category : {{ post.category }}</span>
      <span>|</span>
      <span>
        {{ post.author }} -
        {{ new Date(post.publishedAt).toLocaleDateString() }}
      </span>
    </div>
    <NuxtImg
      :src="post.thumbnail"
      :alt="post.title"
      class="w-full h-[400px] object-cover object-center my-6 rounded-lg shadow-md"
    />

    <div
      class="prose prose-lg mt-8 text-gray-700 leading-relaxed text-base"
      v-html="post.content"
    ></div>
  </div>
  <div v-else class="mt-56 text-center">
    <p class="text-lg text-gray-600">Post not found.</p>
  </div>
</template>

<script setup>
const route = useRoute()
const { slug } = route.params

const { data: posts } = await useFetch('/api/get-posts')

const post = posts.value.find(post => post.slug === slug)

if (post) {
  useHead({
    title: post.title,
    meta: [
      { name: 'description', content: post.descriptions },
      { property: 'og:image', content: post.thumbnail },
    ],
  })
}

defineI18nRoute({
  paths: {
    id: '/artikel/[slug]',
    en: '/blogs/[slug]',
  },
})
</script>

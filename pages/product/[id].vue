<template>
  <div class="container mx-auto px-8 overflow-x-hidden">
    <section
      class="flex gap-x-12 items-start flex-col md:flex-row justify-between border-slate-200 rounded-3xl border p-6"
    >
      <div class="basis-1/2 flex w-full md:px-6 flex-col">
        <LazyGallery :images="product.value?.gallery" />
        <div
          class="bg-pet-secondary-light mt-4 p-2 items-center flex gap-2 rounded-lg"
        >
          <NuxtImg
            src="/bonus.svg"
            alt="Bonus"
            width="20"
            height="20"
            class="bg-cover"
          />
          <span>•</span>
          <p class="text-sm font-bold text-slate-900">
            {{ product.value?.bonus }}
          </p>
        </div>
        <div class="flex mt-6 flex-row gap-3 items-center">
          <NuxtImg
            src="/share.svg"
            alt="Share"
            width="16"
            height="16"
          />
          <p class="font-semibold text-sm text-pet-primary">Shre:</p>
          <LazySocialMedia class="text-md text-slate-400" />
        </div>
      </div>

      <div class="basis-1/2 flex gap-2 flex-col">
        <h1 class="text-2xl font-bold leading-tight">
          {{ product.value?.name }}
        </h1>
        <p class="text-2xl text-pet-primary font-bold">
          IDR {{ formatPrice(product.value?.price) }}
        </p>
        <div class="flex gap-2 mt-4">
          <Button title="Contact us" />
          <Button title="Chat with Momoyo" isoutlined />
        </div>
        <table v-if="product.value" class="mt-4">
          <tr
            v-for="(attribute, index) in productAttributes"
            :key="index"
            class="border-b border-slate-200"
          >
            <td class="text-slate pr-12 text-sm py-3">
              {{ attribute.key }}
            </td>
            <td class="px-4">:</td>
            <td class="text-slate-600 text-sm py-3 border-b border-slate-200">
              {{ attribute.value }}
            </td>
          </tr>
        </table>
        <p v-else>Loading...</p>
      </div>
    </section>
    <LazyDetailsCustomerCaroussel class="mt-8" />
    <LazyHomeProductList :number="4" class="py-8" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params
const product = ref(null)

const { data } = await useFetch(`/api/get-products?id=${id}`)
product.value = data

const title = 'Product for Pets'

defineI18nRoute({
  paths: {
    id: '/produk/[id]',
    en: '/product/[id]',
  },
})

useHead({
  title,
})

const formatPrice = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const productAttributes = ref([])

watch(
  product,
  newProduct => {
    if (newProduct.value) {
      productAttributes.value = [
        { key: 'Product Type', value: newProduct.value.product },
        { key: 'Size', value: newProduct.value.size },
        { key: 'Description', value: newProduct.value.description },
      ]
    }
  },
  { immediate: true },
)
</script>

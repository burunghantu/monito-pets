<template>
  <div class="container mx-auto px-8 overflow-x-hidden">
    <section
      class="flex gap-x-12 items-start flex-col md:flex-row justify-between border-slate-200 rounded-3xl border p-6"
    >
      <div class="basis-1/2 flex w-full md:px-6 flex-col">
        <LazyGallery :images="pet.value?.gallery" />
        <div
          class="bg-pet-secondary-light mt-6 p-2 flex flex-col md:flex-row justify-start gap-2 md:gap-4 rounded-lg"
        >
          <div class="flex gap-2 items-center">
            <NuxtImg
              src="/health.svg"
              alt="100% healthy"
              width="30"
              height="30"
              class="bg-cover"
            />
            <p class="text-xs font-bold text-slate-900">
              100% health guarantee for pets
            </p>
          </div>
          <div class="flex gap-2 items-center">
            <NuxtImg
              src="/guarantee.svg"
              alt="100% healthy"
              width="30"
              height="30"
              class="bg-cover"
            />
            <p class="text-xs font-bold text-slate-900">
              100% guarantee of pet identification
            </p>
          </div>
        </div>
        <div class="flex mt-6 flex-row gap-3 items-center">
          <NuxtImg
            src="/share.svg"
            alt="Share"
            width="16"
            height="16"
          />
          <p class="font-semibold text-sm text-pet-primary">Share:</p>
          <LazySocialMedia class="text-md text-slate-400" />
        </div>
      </div>

      <div class="basis-1/2 flex gap-2 flex-col">
        <p class="text-slate-600 text-md -mb-6 md:mt-0 mt-8">
          SKU {{ pet.value?.sku }}
        </p>
        <h1 class="text-2xl font-bold leading-tight">{{ pet.value?.name }}</h1>
        <p class="text-2xl text-pet-primary font-bold">
          IDR {{ formatPrice(pet.value?.price) }}
        </p>
        <div class="flex gap-2 mt-4">
          <Button title="Contact us" />
          <Button title="Chat with Momoyo" isoutlined />
        </div>
        <table v-if="pet.value" class="mt-4">
          <tr
            v-for="attribute in petAttributes"
            :key="attribute.key"
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
    <LazyHomePetList :number="4" class="py-8" />
  </div>
</template>

<script setup>
const route = useRoute()
const { id } = route.params

const pet = ref(null)

const { data } = await useFetch(`/api/get-pets?id=${id}`)
pet.value = data

const title = 'Pet Details'

defineI18nRoute({
  paths: {
    id: '/detail/[id]',
    en: '/details/[id]',
  },
})

useHead({
  title,
})

const formatPrice = price => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

const petAttributes = ref([])

watch(
  pet,
  newPet => {
    if (newPet.value) {
      petAttributes.value = [
        { key: 'SKU', value: newPet.value.sku },
        { key: 'Published Date', value: newPet.value.published_date },
        { key: 'Location', value: newPet.value.location },
        { key: 'Vaccinated', value: newPet.value.vaccinated },
        { key: 'Dewormed', value: newPet.value.dewormed },
        { key: 'Microchip', value: newPet.value.microchip },
        { key: 'Color', value: newPet.value.color },
        { key: 'Gene', value: newPet.value.gene },
        { key: 'Age', value: newPet.value.age },
        { key: 'Additional Info', value: newPet.value.additional_info },
      ]
    }
  },
  { immediate: true },
)
</script>

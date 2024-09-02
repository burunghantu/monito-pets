<template>
  <section>
    <HomeSectionHeader
      heading="Take a look at some of our pets"
      subheading="What's New?"
      link="/category/all"
      textbutton="View All Pets"
      data-aos="fade-down"
    />
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <Card
        v-for="(pet, index) in pets.slice(0, props.number)"
        :key="index"
        :data="pet"
        data-aos="fade-right"
        :data-aos-delay="index * 100"
      />
    </div>
    <Button
      title="View All Pets"
      to="/category/all"
      class="mt-8 w-full md:hidden"
      isoutlined
      data-aos="zoom-in"
    />
  </section>
</template>

<script setup>
const props = defineProps({
  number: {
    type: Number,
    required: false,
    default: 8,
  },
})
const { data: pets } = await useFetch('/api/get-pets')
</script>

<style></style>

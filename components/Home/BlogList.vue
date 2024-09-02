<template>
  <section>
    <HomeSectionHeader
      :display-all="props.displayAll"
      heading="Useful Pet Knowledge"
      subheading="You Already Know?"
      link="/blogs"
      textbutton="View All"
      data-aos="fade-down"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
      <BlogCard
        v-for="(pet, index) in props.displayAll
          ? pets
          : pets.slice(0, props.number)"
        :key="pet.id"
        :data="pet"
        data-aos="fade-right"
        :data-aos-delay="index * 150"
      />
    </div>
    <Button
      title="View All Blogs"
      to="/"
      class="mt-8 w-full md:hidden"
      isoutlined
    />
  </section>
</template>

<script setup>
const { data: pets } = await useFetch('/api/get-posts')

const props = defineProps({
  number: {
    type: Number,
    default: 3,
  },
  displayAll: {
    type: Boolean,
    default: false,
  },
})
</script>

<style></style>

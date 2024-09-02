<template>
  <section>
    <HomeSectionHeader
      :display-all="props.displayAll"
      heading="Our Products"
      subheading="Hard to choose right products for your pets?"
      link="/product"
      textbutton="View All Products"
      data-aos="fade-down"
    />
    <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
      <Card
        v-for="(product, index) in props.displayAll
          ? products
          : products.slice(0, props.number)"
        :key="index"
        :data="product"
        data-aos="fade-right"
        :data-aos-delay="index * 100"
      />
    </div>
    <Button
      title="View All Products"
      to="/"
      class="mt-8 w-full md:hidden"
      isoutlined
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
  displayAll: {
    type: Boolean,
    required: false,
    default: false,
  },
})
const { data: products } = await useFetch('/api/get-products')
</script>

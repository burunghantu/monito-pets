<template>
  <section
    class="h-[640px] md:h-[380px] p-5 text-center rounded-3xl relative overflow-hidden w-full"
    :class="props.background"
  >
    <div
      class="flex flex-col gap-2 md:gap-0 z-20 relative md:max-w-md md:text-end md:ml-auto md:mr-24"
    >
      <h2
        class="font-bold text-4xl md:text-5xl my-5 md:my-8"
        :class="props.textcolor"
      >
        One More Friend
      </h2>
      <h3 class="-mt-4 font-bold text-2xl md:text-3xl" :class="props.textcolor">
        Thousands More Fun!
      </h3>
      <p class="mt-4 text-sm" :class="props.pcolor">
        Having a pet means you have more joy, a new friend, a happy person who
        will always be with you to have fun. We have 200+ different pets that
        can meet your needs!
      </p>
      <div class="mt-6 flex gap-4 mx-auto md:ml-auto md:mr-0">
        <Button
          class="w-40"
          :class="props.buttonoutlinedcolor"
          to="/"
          title="View Intro"
          isoutlined
          icon="caret-right"
        />
        <Button
          class="w-40"
          :class="props.buttoncolor"
          to="/"
          title="Explore Now"
        />
      </div>
    </div>

    <NuxtImg
      :src="`${props.img}.png`"
      alt="Pet Hero"
      :width="props.width"
      :height="props.height"
      class="absolute bottom-0 z-30 left-0 right-0 mx-auto md:mx-0"
      :class="props.left"
      loading="lazy"
    />

    <div
      class="w-[800px] h-[500px] rounded-[75px] absolute -right-10 md:-right-40 -top-[180px] md:-top-[100px] mx-auto rotate-[10deg] md:rotate-[25deg] z-10"
      :class="props.rectangle1"
    />
    <div
      class="w-[800px] h-[500px] rounded-[75px] absolute -left-20 md:-left-[80px] right-0 -bottom-[330px] mx-auto md:mx-0 rotate-[15deg] md:rotate-[25deg] z-0"
      :class="props.rectangle2"
    />
  </section>
</template>

<script setup>
const props = defineProps({
  img: {
    type: String,
    default: 'woman-with-dog-2',
  },
  width: {
    type: String,
    default: '350',
  },
  height: {
    type: String,
    default: '350',
  },
  left: {
    type: String,
    default: 'md:left-40',
  },
  background: {
    type: String,
    default: 'bg-pet-primary',
  },
  rectangle1: {
    type: String,
    default: 'bg-pet-secondary-light',
  },
  rectangle2: {
    type: String,
    default: 'bg-[#002A48]',
  },
  textcolor: {
    type: String,
    default: 'text-pet-primary',
  },
  pcolor: {
    type: String,
    default: 'text-black',
  },
  buttoncolor: {
    type: String,
    default: 'bg-pet-primary',
  },
  buttonoutlinedcolor: {
    type: String,
    default: '',
  },
})
</script>

<style></style>

<template>
  <section
    class="h-[640px] md:h-[380px] p-6 text-center rounded-3xl relative bg-[#FFB775] overflow-hidden w-full"
  >
    <div
      class="flex flex-col gap-2 z-20 relative md:max-w-md md:text-start md:ml-32"
    >
      <div class="flex gap-4 items-center justify-center md:justify-start">
        <h2
          class="font-bold text-pet-primary text-4xl md:text-5xl my-5 md:my-8"
        >
          Adoption
        </h2>
        <NuxtImg
          class="w-8 h-8 md:h-12 md:w-12"
          src="assets/img/paw.svg"
          alt="paw"
          width="40"
          height="40"
        />
      </div>

      <h3 class="-mt-4 font-bold text-pet-primary text-2xl md:text-3xl">
        We need help. so do they.
      </h3>
      <p class="mt-4 text-sm">
        Adopt a pet and give it a home, <br />it will be love you back
        unconditionally.
      </p>
      <div class="mt-6 flex gap-4 mx-auto md:mx-0">
        <Button class="w-40" to="/" title="Explore Now" />
        <Button
          class="w-40"
          to="/"
          title="View Intro"
          isoutlined
          icon="caret-right"
        />
      </div>
    </div>

    <NuxtImg
      src="assets/img/handhake-human-dog.png"
      alt="Pet Hero"
      width="350"
      height="350"
      class="absolute bottom-0 z-30 left-0 md:ml-auto md:mr-32 right-0 mx-auto md:h-full w"
      loading="lazy"
    />

    <div
      class="w-[800px] h-[500px] bg-pet-secondary-light rounded-[75px] absolute -right-10 md:-left-[160px] -top-[180px] md:-top-[100px] mx-auto md:mx-0 md:-rotate-[20deg] rotate-[10deg] z-10"
    />
    <div
      class="w-[800px] h-[500px] bg-pet-secondary-light opacity-50 rounded-[75px] absolute -left-20 md:left-auto md:-right-[100px] md:-rotate-[20deg] right-0 -bottom-[380px] mx-auto md:mx-0 rotate-[15deg] z-0"
    />
  </section>
</template>

<script lang="ts" setup></script>

<style></style>

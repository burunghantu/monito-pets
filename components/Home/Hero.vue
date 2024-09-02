<template>
  <section
    class="px-8 h-[calc(100vh-8vh)] relative bg-pet-secondary-light mt-20 flex flex-col overflow-hidden rounded-b-2xl"
  >
    <div
      class="w-[65px] h-[65px] bg-pet-secondary top-[188px] rounded-2xl absolute right-0 -left-20 rotate-[20deg] lg:-left-[0px] lg:right-[1230px] hidden lg:block mx-auto"
    />
    <div
      class="w-[42px] h-[42px] bg-pet-secondary top-[168px] rounded-xl absolute right-0 -left-20 rotate-[-20deg] lg:left-[210px] lg:right-0 hidden lg:block mx-auto"
    />
    <div
      class="w-[20px] h-[20px] bg-pet-secondary top-[108px] rounded-md absolute right-0 -left-20 rotate-[20deg] lg:left-[250px] lg:right-0 hidden lg:block mx-auto"
    />
    <div
      class="w-[35px] h-[35px] bg-pet-primary top-[188px] rounded-xl absolute right-0 -left-20 rotate-[-40deg] lg:left-[200px] lg:right-0 hidden lg:block mx-auto"
    />
    <div class="container">
      <div class="lg:mt-48 relative z-20">
        <h1 class="font-bold text-pet-primary text-5xl lg:text-6xl">
          One More Friend <br />
          <span class="-mt-6 font-bold text-pet-primary text-3xl lg:text-4xl">
            Thousands More Fun!
          </span>
        </h1>

        <p class="mt-4 text-sm lg:text-md lg:max-w-[450px] md:mt-8">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div class="mt-12 flex gap-4">
          <Button
            class="w-40"
            to="/"
            title="View Intro"
            isoutlined
            icon="caret-right"
          />
          <Button class="w-40" to="/" title="Explore Now" />
        </div>
      </div>

      <NuxtImg
        src="/woman-with-dog.png"
        alt="Pet Hero"
        height="450"
        width="350"
        class="absolute bottom-0 lg:h-[700px] lg:w-[574px] z-10 left-0 right-0 lg:right-56 lg:mr-0 mx-auto"
      />
      <div
        class="w-[350px] h-[350px] bg-pet-secondary opacity-40 rounded-[78px] absolute right-0 -bottom-60 -left-10 rotate-[60deg] lg:left-[410px] lg:ml-0 mx-auto"
      />
      <div
        class="w-[400px] h-[400px] lg:w-[400px] lg:h-[550px] bg-pet-primary rounded-[48px] absolute left-0 -right-10 -bottom-20 rotate-[10deg] lg:-bottom-32 lg:right-[410px] lg:mr-0 mx-auto z-0"
      />
      <div
        class="w-[400px] h-[500px] lg:w-[600px] lg:h-[600px] bg-pet-secondary rounded-[48px] absolute left-0 -right-20 -bottom-[150px] mx-auto lg:right-[180px] lg:-bottom-[210px] lg:mr-0 rotate-[28deg] z-0"
      />
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style></style>

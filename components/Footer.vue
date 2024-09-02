<template>
  <footer class="bg-pet-secondary-light rounded-t-3xl mt-12">
    <div class="container mx-auto py-6">
      <div
        class="bg-pet-primary p-6 flex md:gap-4 flex-col md:flex-row items-center rounded-2xl"
      >
        <h3 class="font-bold text-lg md:text-xl text-white">
          Register now so you don't miss our programs
        </h3>
        <div
          class="w-full md:w-2/3 bg-white p-3 mt-4 flex flex-col md:flex-row items-center rounded-xl"
        >
          <label for="email"></label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            class="rounded-xl border-slate-400 p-4 w-full"
          />
          <button
            class="bg-pet-primary w-full md:w-1/3 text-white p-4 mt-2 md:mt-0 md:ml-2 rounded-xl"
          >
            Subscribe Now
          </button>
        </div>
      </div>
      <div class="md:flex md:justify-between items-center md:py-5">
        <ul class="flex gap-4 mt-8 justify-between">
          <li v-for="item in menu" :key="item.title">
            <NuxtLinkLocale
              :to="item.link"
              class="text-black text-lg font-medium hover:text-pet-primary"
            >
              {{ item.title }}
            </NuxtLinkLocale>
          </li>
        </ul>
        <LazySocialMedia class="text-2xl text-black mt-6" />
      </div>
      <hr class="border border-slate-400 my-6" />
      <div class="md:flex items-center md:justify-between">
        <NuxtImg
          src="/logo.svg"
          alt="Pet Logo"
          class="w-32 mx-auto mt-2 md:order-2"
        />
        <div
          class="flex justify-center gap-4 md:gap-6 md:order-3 text-sm text-slate-600 hover:text-pet-primary mt-12 md:mt-2"
        >
          <NuxtLinkLocale to="/"> Terms of Services </NuxtLinkLocale>
          <NuxtLinkLocale to="/"> Privacy Policy </NuxtLinkLocale>
        </div>
        <p class="text-center text-slate-700 text-xs mt-2">
          © 2021 Monito. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const menu = [
  {
    title: 'Home',
    link: '/',
  },
  {
    title: 'Category',
    link: '/category',
  },
  {
    title: 'About',
    link: '/about',
  },
  {
    title: 'Contact',
    link: '/contact',
  },
]
</script>

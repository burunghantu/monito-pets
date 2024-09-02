<template>
  <div
    class="container mx-auto overflow-x-hidden flex md:flex-row flex-col gap-12"
  >
    <HomeBannerV1 class="md:basis-1/2 md:h-[650px]" data-aos="fade-right" />
    <div
      class="border-slate-200 border md:basis-1/2 mx-auto rounded-3xl shadow-sm p-8"
      data-aos="fade-left"
    >
      <form
        class="flex justify-between h-full flex-col w-[calc(100vw-121px)] md:w-full"
      >
        <div class="gap-4 flex flex-col">
          <FormInputField id="name" label="Name" placeholder="Your name" />
          <FormInputField id="email" label="Email" placeholder="Your email" />
          <FormInputField id="phone" label="Phone" placeholder="Your phone" />
          <FormTextArea
            id="message"
            label="Message"
            placeholder="Your message"
          />
        </div>

        <button
          type="submit"
          class="bg-pet-primary text-white font-semibold py-2 rounded-md"
        >
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
defineI18nRoute({
  paths: {
    id: '/kontak',
    en: '/contact',
  },
})
</script>

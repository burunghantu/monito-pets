<script setup>
import { SFacebook, STwitter, SLinkedIn, SWhatsApp } from 'vue-socials'
const route = useRoute()
const config = useRuntimeConfig()
const windowFeatures = ref({})
const shareTitle = ref('Hello')
const shareUrl = { url: `${config.public.BASE_URL}${route.path}` }
const shareFacebookOpts = {
  ...shareUrl,
  quote: shareTitle, // optional
  hashtag: '#Github' // optional
}
const shareTwitterOpts = {
  ...shareUrl,
  text: shareTitle, // optional
  hashtags: ['hash', 'tag'], // optional
  via: 'suitmedia' // optional, daganti dengan twiiter client
}
const shareLinkedinOpts = {
  ...shareUrl
}
const shareWhatsAppOpts = {
  number: '1(999)999-99-99',
  text: shareTitle
}
const useNativeBehavior = ref(false)
</script>

<template>
  <div class="social-share">
    <s-facebook
      class="btn-social btn-social--facebook mr-3"
      :window-features="windowFeatures"
      :share-options="shareFacebookOpts"
      :use-native-behavior="useNativeBehavior"
    >
      <nuxt-icon name="icon-facebook" />
    </s-facebook>
    <!-- Facebook -->

    <s-twitter
      class="btn-social btn-social--twitter mr-3"
      :window-features="windowFeatures"
      :share-options="shareTwitterOpts"
      :use-native-behavior="useNativeBehavior"
    >
      <nuxt-icon name="icon-x" />
    </s-twitter>
    <!-- Twitter / X -->

    <s-linked-in
      class="btn-social btn-social--linkedin mr-3"
      :window-features="windowFeatures"
      :share-options="shareLinkedinOpts"
      :use-native-behavior="useNativeBehavior"
    >
      <nuxt-icon name="icon-linkedin" />
    </s-linked-in>
    <!-- Linkedin -->

    <s-whats-app
      class="btn-social btn-social--whatsapp"
      :window-features="windowFeatures"
      :share-options="shareWhatsAppOpts"
      :use-native-behavior="useNativeBehavior"
    >
      <nuxt-icon name="icon-whatsapp" />
    </s-whats-app>
    <!-- WhatsApp -->
  </div>
</template>

<style lang="scss" scoped>
$brand_color: (
  'facebook': #1877f2,
  'twitter': #14171a,
  'linkedin': #0a66c2,
  'whatsapp': #25d366,
  'youtube': #ff0000
);

.btn-social {
  display: inline-flex;
  width: 42px;
  height: 42px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #fff;
}

@mixin btnSocial($bg) {
  background-color: $bg;

  &:hover {
    background-color: lighten($bg, 10%);
  }
}

@each $state, $color in $brand_color {
  .btn-social--#{$state} {
    @include btnSocial($color);
  }
}
</style>

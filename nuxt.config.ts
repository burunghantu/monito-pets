// import { defineNuxtConfig } from 'nuxt/config'
import defaultMeta from './config/defaultMeta'
const version = process.env.npm_package_version
const isDev = () =>
  process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'development'

let noIndexing: { hid: string; name: string; content: string }[] = []
const isStaging = Number(process.env.IS_STAGING) === 1

if (isStaging) {
  noIndexing = [
    {
      hid: 'robots',
      name: 'robots',
      content: 'noindex',
    },
    {
      hid: 'googlebot',
      name: 'googlebot',
      content: 'noindex',
    },
  ]
}

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    buildAssetsDir: !isDev() ? 'assets' : '/_nuxt/',
    head: {
      title: 'Baze Nuxt 3',
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [...defaultMeta, ...noIndexing],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
  },

  imports: {
    dirs: ['composables', 'composables/**', 'utils'],
  },

  runtimeConfig: {
    NUXT_SECRET: process.env.NUXT_SECRET,
    public: {
      BASE_URL: process.env.NUXT_PUBLIC_SITE_URL,
    },
  },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  css: [
    '~/assets/scss/main.scss',
    '~/assets/scss/modules/_modules.scss',
    '~/assets/scss/modules/_header.scss',
    '@vuepic/vue-datepicker/dist/main.css',
    'vue-select/dist/vue-select.css',
  ],

  plugins: [
    { src: '~/plugins/vue-select.js' }
  ],

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    'nuxt-jsonld',
    'nuxt-icons',
    'nuxt-swiper',
    '@nuxtjs/i18n',
    'dayjs-nuxt',
    '@nuxtjs/google-fonts',
    'nuxt-snackbar',
    '@nuxtjs/eslint-module',
    './modules/auto-import-eslint.ts',
    'nuxt-aos',
  ],

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore',
    ],
  },

  i18n: {
    strategy: 'prefix',
    defaultLocale: 'en',
    locales: [
      {
        code: 'id',
        iso: 'id-ID',
      },
      {
        code: 'en',
        iso: 'en-US',
      },
    ],
    vueI18n: './lang/localeConfig.js',
    detectBrowserLanguage: false,
  },

  dayjs: {
    locales: ['en', 'id'],
    defaultLocale: 'en',
  },

  googleFonts: {
    families: {
      Roboto: true,
      Montserrat: [400, 700, 900],
    },
  },

  build: {
    transpile: ['@vuepic/vue-datepicker'],
  },

  image: {
    dir: 'public/assets/img',
    domains: ['img.youtube.com','nuxt-monito-pets.vercel.app'],
    alias: {
      vercel: 'https://nuxt-monito-pets.vercel.app/',
      youtube: 'https://img.youtube.com',
    },
    presets: {
      thumbnail: {
        modifiers: {
          format: 'webp',
          width: 450,
          height: 254,
        },
      },
      client: {
        modifiers: {
          format: 'webp',
          width: 204,
          height: 204,
        },
      },
      heroDetail: {
        modifiers: {
          format: 'webp',
          width: 960,
          height: 540,
        },
      },
    },
    provider: 'ipx',
    ipx: {
      maxAge: 60000,
    },
  },

  snackbar: {
    top: true,
    right: true,
    duration: 5000,
  },

  vite: {
    plugins: [],
    optimizeDeps: { exclude: ['fsevents'] },

    build: {
      rollupOptions: {
        output: {
          entryFileNames: `assets/[hash]-${version}.js`,
          chunkFileNames: `assets/[hash]-${version}.js`,
          assetFileNames: assetInfo => {
            if (assetInfo?.name?.endsWith('.css'))
              return `assets/css/[hash]-${version}[extname]`
            if (/\.(png|jpe?g|gif|svg|webp)$/i.test(assetInfo?.name || ''))
              return `assets/img/[hash]-${version}[extname]`
            if (/\.(woff|woff2|eot|ttf|otf)$/i.test(assetInfo?.name || ''))
              return `assets/fonts/[hash]-${version}[extname]`
            if (/\.(mp4|webm|ogv)$/i.test(assetInfo?.name || ''))
              return `assets/videos/[hash]-${version}[extname]`
            return `assets/[hash]-${version}[extname]`
          },
        },
      },
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/partials/_variables.scss" as *;',
        },
      },
    },
  },

  compatibilityDate: '2024-08-09',

  aos: {
    disable: false,
    startEvent: 'DOMContentLoaded',
    initClassName: 'aos-init',
    animatedClassName: 'aos-animate',
    useClassNames: false,
    disableMutationObserver: false,
    debounceDelay: 50,
    throttleDelay: 99,

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  },
})

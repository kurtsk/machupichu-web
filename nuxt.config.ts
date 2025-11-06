// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
// import { defineNuxtConfig } from 'nuxt'
import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({

  css: [
    // Load a Node.js module directly (here it's a Sass file).
    // 'bulma',
    // SCSS file in the project
    // '@/assets/css/main.scss',
    'vuetify/styles'
  ],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/css/main.scss" as *;'
          // additionalData: '@import "@/assets/css/main.scss" as *;'
        }
      }
    },
    ssr: {
      noExternal: ['vuetify'], // add the vuetify vite plugin
    },
  },


  modules: [
    '@pinia/nuxt',
    // '@nuxt/image',
    // this adds the vuetify vite plugin
    // also produces type errors in the current beta release
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-ignore
        config.plugins.push(vuetify())
      )
    }
  ],

  app: {
    pageTransition: {name: 'slide-down-fade', mode: 'out-in'}
  },

  compatibilityDate: '2025-10-01',

  nitro: {
    compatibilityDate: '2025-10-01'
  },

  runtimeConfig: {
    secret: process.env.APP_NAME,
    public: {
      BASE_URL: process.env.BASE_URL,
      APP_URL: process.env.APP_URL,

      APP_NAME: process.env.APP_NAME,
      APP_META_DESCRIPTION: process.env.APP_META_DESCRIPTION,
      APP_META_KEYS: process.env.APP_META_KEYS,
      APP_META_AUTOR: process.env.APP_META_AUTOR,

      APP_LOGO: process.env.APP_LOGO,
      APP_ICON: process.env.APP_ICON,
      APP_BG: process.env.APP_BG,
      APP_BG_RESPONSIVE: process.env.APP_BG_RESPONSIVE,
      APP_LOGO_HALAL_FOOD: process.env.APP_LOGO_HALAL_FOOD,
      APP_LOGO_ALT: process.env.APP_LOGO_ALT,
      APP_BG_ALT: process.env.APP_BG_ALT,

      APP_URL_BOOK: process.env.APP_URL_BOOK,
      APP_URL_DELIVERY: process.env.APP_URL_DELIVERY,

      APP_URL_MENU_1: process.env.APP_URL_MENU_1,
      APP_URL_MENU_2: process.env.APP_URL_MENU_2,

      APP_LINK_HOME: process.env.APP_LINK_HOME,
      APP_LINK_ABOUT: process.env.APP_LINK_ABOUT,
      APP_LINK_DELIVERY: process.env.APP_LINK_DELIVERY,
      APP_LINK_BOOK: process.env.APP_LINK_BOOK,
      APP_LINK_MENU: process.env.APP_LINK_MENU,
      APP_LINK_CONTACT: process.env.APP_LINK_CONTACT,

      APP_URL_FACEBOOK: process.env.APP_URL_FACEBOOK,
      APP_URL_INSTAGRAM: process.env.APP_URL_INSTAGRAM,
      APP_URL_TRIPADVISOR: process.env.APP_URL_TRIPADVISOR,

      APP_ADRESS: process.env.APP_ADRESS,
      APP_PHONE: process.env.APP_PHONE,
      APP_MAIL: process.env.APP_MAIL,
      APP_SLOGAN_1: process.env.APP_SLOGAN_1,
      APP_SLOGAN_2: process.env.APP_SLOGAN_2,

      APP_GRAPHICS_OVERLAY: process.env.APP_GRAPHICS_OVERLAY,
      APP_GRAPHICS_DRAWER_BG: process.env.APP_GRAPHICS_DRAWER_BG,
      APP_IMG_URL: process.env.APP_IMG_URL,
    }
  },


})

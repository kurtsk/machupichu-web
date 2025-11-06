// import { createVuetify } from 'vuetify'
//
// export default defineNuxtPlugin(nuxtApp => {
//     const vuetify = createVuetify({
//         // your config will come here
//     })
//
//     nuxtApp.vueApp.use(vuetify)
// })

import { defineNuxtPlugin } from '#app'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi },
    },
  })
  nuxtApp.vueApp.use(vuetify)
})



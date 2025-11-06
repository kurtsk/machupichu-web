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
import { createVuetify } from 'vuetify'
import colors from 'vuetify'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
    // @ts-ignore
        theme: { dark: true },
    })
    app.vueApp.use(vuetify)
})



<template>
  <v-row align="center" justify="center">
    <lgo></lgo>
    <v-col cols="12">
      <v-card
        elevation="0"
        color="rgba(0,0,0,0.0)">
        <v-card-text class="text-center mb-6">
          <p class="title-section mt-none mt-md-8 mb-10 mb-md-3 text-center text-uppercase">Nosotros</p>
        </v-card-text>
      </v-card>

      <v-card
        max-width="550"
        color="rgba(0,0,0,0.8)"
        elevation="8"
        class="mx-auto py-md-12 px-md-12 k-anim k-zoomIn fast300 m-in-easy delay-200ms"
      >
        <v-card-text
          class="mt-none mt-md-4 mb-10 mb-md-3 text-justify text-white subtitle-1 k-anim k-fadeInUp fast500 m-in-easy delay-500ms"
        >
          <p class="mb-4">
            En este ejemplo, se extraen publicRuntimeConfig y privateRuntimeConfig de useRuntimeConfig(). Estos
            contienen las configuraciones de tiempo de ejecución del lado del cliente y del servidor, respectivamente,
            que se definen en tu nuxt.config.js.
          </p>
          <p>
            Debes tener en cuenta que useRuntimeConfig() solo debe ser llamado durante la inicialización de la tienda,
            como en el ejemplo anterior, y no dentro de las acciones o los getters de la tienda.
          </p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useRuntimeConfig} from "nuxt/app";
import {ref} from "vue";
import {useDataStore} from '~/stores/data-store.js'
import Lgo from "~/components/Lgo.vue";

const config = useRuntimeConfig()
const dataStore = useDataStore()

let appName = ref(config.public.APP_NAME)

definePageMeta({
  layout: 'default',
  title: 'About',
  // pageTransition: {
  //   name: 'slide-down-fade',
  //   mode: 'out-in',
  // },
})
</script>

<style lang="scss">

</style>

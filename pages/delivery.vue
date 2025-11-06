<template>
  <v-row align="center" justify="center">
    <lgo></lgo>
    <v-col cols="12">
      <v-card
        elevation="0"
        color="rgba(0,0,0,0.0)">
        <v-card-text class="text-center mb-6">
          <p class="title-section mt-none mt-md-8 mb-10 mb-md-3 text-center text-uppercase">Delivery</p>
        </v-card-text>
      </v-card>

      <v-card
        max-width="550"
        color="rgba(0,0,0,0.7)"
        elevation="8"
        class="mx-auto py-md-12 px-md-12 k-anim k-zoomIn fast300 m-in-easy delay-200ms"
      >
        <v-card-text>
          <h3
            class="mt-none mt-md-4 mb-10 mb-md-3 text-center text-uppercase text-white subtitle-1 k-anim k-fadeInLeft fast500 m-in-easy delay-500ms"
          >
            Pulse el siguiente boton para ir a delivery.
          </h3>
          <a
            class="btn-blue mt-10 text-uppercase k-anim k-fadeInRight fast500 m-in-easy delay-500ms"
            :href="dataStore.appUrlBook"
            role="button"
          >
            Reservas
          </a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useDataStore} from '~/stores/data-store.js'
import Lgo from "~/components/Lgo.vue";


const dataStore = useDataStore()
</script>

<style lang="scss">

</style>

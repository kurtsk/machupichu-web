<script setup>
import {useDataStore} from '~/stores/data-store.js'
import Logo from "~/components/Lgo.vue";

const dataStore = useDataStore()
</script>

<template>
  <v-row align="center" justify="center">
    <logo />
    <v-col cols="12">
      <v-card
        elevation="0"
        color="rgba(0,0,0,0.0)">
        <v-card-text class="text-center mb-2">
          <p class="title-section mt-none mt-md-2 mb-2 mb-md-3 text-center text-uppercase">Reservas</p>
        </v-card-text>
      </v-card>

      <v-card
        max-width="550"
        color="rgba(0,0,0,0.7)"
        elevation="8"
        rounded="xl"
        class="mx-auto py-md-12 px-md-12 k-anim k-zoomIn fast300 m-in-easy delay-200ms"
      >
        <v-card-text>
          <h3
            class="mt-none mt-md-4 mb-10 mb-md-3 text-center text-uppercase text-white subtitle-1 k-anim k-fadeInLeft fast500 m-in-easy delay-500ms"
          >
            Pulse el siguiente boton para reservar.
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

<style lang="scss">
.title-section {
  font-size: 4rem;
  font-weight: 200;
  color: white;
  text-shadow: 0 3px 3px black;
}

@media (max-width: 576px) {
  .title-section {
    font-size: 2rem;
    margin-top: 2px;
  }
}

@media (max-width: 480px) {
  .title-section {
    font-size: 3rem;
    margin-top: 2px;
  }
}

@media (max-width: 375px) {
  .title-section {
    font-size: 3rem;
    margin-top: 2px;
    margin-bottom: 10px;
  }
}
</style>

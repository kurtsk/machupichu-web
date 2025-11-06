<script setup>
import {ref} from "vue"
import {useRuntimeConfig} from "nuxt/app";
import {useDataStore} from '~/stores/data-store.js'
import Lgo from "~/components/Lgo.vue";

definePageMeta({
  layout: 'default',
  title: 'Home',
})
const dataStore = useDataStore()
const config = useRuntimeConfig();

</script>

<template>
  <v-row align="center" justify="center" class="">
    <lgo></lgo>
    <v-col cols="12" class="k-slogan-text text-center my-md-6">
      <p v-if="dataStore.appSlogan1" class="slogan-1 k-text-white mt-4 mb-0 k-anim k-fadeInLeft fast1200 m-in-easy delay-400ms">
        {{ dataStore.appSlogan1 }}
      </p>
      <p v-if="dataStore.appSlogan1" class="slogan-2 k-text-white mt-0 k-anim k-fadeInRight fast1200 m-in-easy delay-400ms">
        {{ dataStore.appSlogan2 }}
      </p>
    </v-col>

    <!--      SPECISL DAY    -->

    <v-col v-if="dataStore.appSpecialDay" cols="12" md="3">
      <NuxtLink :to="dataStore.appUrlSpecialDay" class="btn-blue k-anim k-zoomIn m-in-easy delay-600ms" exact>
        {{ dataStore.appUrlSpecialDayText.toUpperCase() }}
      </NuxtLink>
    </v-col>

    <!--      DELIVERY    -->

    <v-col v-if="dataStore.appDelivery" cols="12" md="3">
      <NuxtLink :to="dataStore.appLinkDelivery" class="btn-blue k-anim k-zoomIn m-in-easy delay-600ms" exact>
        DELIVERY
      </NuxtLink>
    </v-col>

    <!--      RESERVAS    -->

    <v-col v-if="dataStore.appBook" cols="12" md="3">
      <NuxtLink :to="dataStore.appLinkBook" class="btn-blue k-anim k-zoomIn m-in-easy delay-600ms" exact>
        RESERVAS
      </NuxtLink>
    </v-col>

    <!--      CARTA    -->

    <v-col v-if="dataStore.appMenu" cols="12" md="3">
      <NuxtLink :to="dataStore.appLinkMenu" class="btn-blue k-anim k-zoomIn m-in-easy delay-800ms" exact>
        CARTA
      </NuxtLink>
    </v-col>

    <!--      CONTACTO    -->

    <v-col v-if="dataStore.appContact" cols="12" md="3">
      <NuxtLink :to="dataStore.appLinkContact" class="btn-blue k-anim k-zoomIn m-in-easy delay-1s" exact>
        CONTACTO
      </NuxtLink>
    </v-col>
  </v-row>
</template>


<style lang="scss">

.k-slogan-text {
  font-family: 'Oswald', sans-serif;
  background-color: rgba(15, 15, 15, 0.4);
  color: white;
  font-size: 3rem;
  font-weight: 100;
  text-align: center;
  text-shadow: 0 2px 3px #000000;
}
@media (max-width: 480px) {
  .k-slogan-text {
    font-size: 1.3rem;
  }
}
</style>

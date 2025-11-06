<template>
  <v-row align="center" justify="center">
    <lgo></lgo>
    <v-col cols="12" class="text-center">
      <v-card
        elevation="0"
        color="rgba(0,0,0,0.0)">
        <v-card-text class="text-center mb-6">
            <p class="title-section mt-none mt-md-8 mb-10 mb-md-3 text-center text-uppercase">Contacto</p>
        </v-card-text>
      </v-card>

      <v-card
        max-width="580"
        color="rgba(0,0,0,0.7)"
        elevation="8"
        rounded="xl"
        class="mx-auto py-md-12 px-md-12 k-anim k-zoomIn fast300 m-in-easy delay-200ms"
      >
        <v-card-item>
          <v-row align="center" justify="space-around">
            <v-col
              v-if="dataStore.appUrlFacebook"
              cols="3"
              justify="center"
              class="text-center"
            >
              <a :href="dataStore.appUrlFacebook" target="_blank">
                <img
                  class="social-icon-contact k-anim k-zoomIn fast500 m-in-easy delay-300ms"
                  :src="dataStore.facebookIconUrl"
                  alt="facebook-logo"
                />
              </a>
            </v-col>
            <v-col
              v-if="dataStore.appUrlTripAdvisor"
              cols="3"
              justify="center"
              class="text-center"
            >
              <a :href="dataStore.appUrlTripAdvisor" target="_blank">
                <img
                  class="social-icon-contact k-anim k-zoomIn fast500 m-in-easy delay-300ms"
                  :src="dataStore.tripadvisorIconUrl"
                  alt="tripadvisor-logo"
                />
              </a>
            </v-col>
            <v-col
              v-if="dataStore.appUrlInstagram"
              cols="3"
              justify="center"
              class="text-center"
            >
              <a :href="dataStore.appUrlInstagram" target="_blank">
                <img
                  class="social-icon-contact k-anim k-zoomIn fast500 m-in-easy delay-300ms"
                  :src="dataStore.instagramIconUrl"
                  alt="instagram-logo"
                />
              </a>
            </v-col>
            <v-col
              v-if="dataStore.appEmail"
              cols="3"
              justify="center"
              class="text-center"
            >
              <a :href="'mailto:' + dataStore.appEmail" target="_blank">
                <img
                  class="social-icon-contact k-anim k-zoomIn fast500 m-in-easy delay-300ms"
                  :src="dataStore.emailIconUrl"
                  alt="email-logo"
                />
              </a>
            </v-col>
            <p
              style="width: 100%"
              class="mt-8 text-center text-white k-anim k-fadeInRight fast500 m-in-easy delay-700ms bg-amber-4"
            >
            {{ dataStore.appAddress }}
            </p>

            <p
              class="pb-4 text-center text-white k-anim k-fadeInLeft fast500 m-in-easy delay-700ms"
            >
              {{ dataStore.appPhone }}
            </p>
            <p
              class="pb-4 text-center text-white k-ani.m k-fadeInLeft fast500 m-in-easy delay-700ms"
            >
              {{ dataStore.appHorarios }}
            </p>
          </v-row>
        </v-card-item>
      </v-card>
    </v-col>
  </v-row>
</template>

<script setup>
import {useDataStore} from '~/stores/data-store.js'
import {useRuntimeConfig} from "nuxt/app";
import Lgo from "~/components/Lgo.vue";

const config = useRuntimeConfig();
const dataStore = useDataStore()

onMounted( () => {
  // console.log(dataStore.appEmail)
  // console.log(dataStore.emailIconUrl)
})
</script>

<style lang="scss">
.social-icon-contact{
  width: 100%;
  max-width: 100px;
  margin: 0 auto 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
.title-section {
  z-index: 99999;
  font-size: 4rem;
  font-weight: 200;
  color: white;
  text-shadow: 0 3px 3px black;
}
/* .input:-internal-autofill-selected {
    background-color: rgb(232, 240, 254) !important;
    background-image: none !important;
    color: -internal-light-dark-color(black, white) !important;
  }*/
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

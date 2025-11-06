<script setup>
import {useDataStore} from '~/stores/data-store.js'

const dataStore = useDataStore()
</script>

<template>
  <v-col cols="12" justify="center" align="center"
         class="mb-6 k-anim k-fadeInDown fast1200 m-in-easy">
    <div class="logo-img-home">
      <img
        class=""
        :src="dataStore.appLogo"
        :alt="dataStore.appLogoAlt"
      />
<!--      <template v-slot:placeholder>-->
<!--        <div class="fill-height ma-0">-->
<!--          <v-progress-circular indeterminate color="grey lighten-5"/>-->
<!--        </div>-->
<!--      </template>-->
    </div>
  </v-col>
</template>

<style lang="scss">
.logo-img-home img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 25px;
}

@media (max-width: 480px) {
  .logo-img-home img {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 375px) {
  .logo-img-home img {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 360px) {
  .logo-img-home img {
    width: 100px;
    height: 100px;
  }
}
</style>

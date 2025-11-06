<template>
  <v-app dark>
    <app-bar />
    <v-main class="home-bg d-flex align-center">
      <!--      :style="{ 'background-image': 'url(' + imageBg + ')' }"-->
      <v-container class="mt-none mt-md-12" fluid>
        <slot />
      </v-container>
      <!--      <v-fab-transition>
        <v-btn
          fab
          large
          fixed
          dark
          bottom
          left
          color="green"
          class="v-btn&#45;&#45;example ml-6"
          target="_blank"
          :href="apilink"
        >
          <v-icon>mdi-whatsapp</v-icon>
        </v-btn>
      </v-fab-transition>-->
      <!--      <v-fab-transition>
        <v-btn
          fab
          fixed
          dark
          bottom
          right
          class="v-btn&#45;&#45;example ml-6"
          style="background-color: #0f0f0f"
        >
          <v-avatar size="40px">
            <v-img
              class="logo-img-home"
              :src="appLogoHalalFood"
              :alt="appLogoAlt"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="grey lighten-5" />
                </v-row>
              </template>
            </v-img>
          </v-avatar>
        </v-btn>
      </v-fab-transition>-->
    </v-main>
    <app-footer />
  </v-app>
</template>

<script setup>
import AppBar from "./partials/AppBar.vue";
import AppFooter from "./partials/AppFooter.vue";
// import Logo from "../components/Lgo.vue";

</script>

<style lang="scss">
.home-bg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-image: url('/img/bg.jpg');
  &::before {
    content: '';
    position: absolute;
    z-index: 0;
    display: block;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 1),
            rgba(0, 0, 0, 0.65) 10%,
            rgba(0, 0, 0, 0.4) 26%,
            rgba(0, 0, 0, 0.4) 70%,
            rgba(0, 0, 0, 0.8) 100%
    );
  }
}
@media screen and (max-width: 600px) {
  .home-bg {
    background-image: url('/img/bg_responsive.jpg');
  }
}
</style>

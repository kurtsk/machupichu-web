<script setup>

import {ref} from "vue";
// import {useRuntimeConfig} from "nuxt/app";
import {useDataStore} from '~/stores/data-store.js'


const dataStore = useDataStore()
// const config = useRuntimeConfig();

const drawer = ref(false)
const toggleDrawer = () => {
  console.log('ENTRE A DRAWER')
  drawer.value = !drawer.value
}

</script>

<template>
  <v-app-bar color="appbg" :fixed="true" flat theme="dark" class="appbg">
    <v-app-bar-nav-icon @click="toggleDrawer"/>
    <div class="logo-bar d-none d-sm-flex">
      <img
        class="elevation-4"
        :src="dataStore.appIcon"
        :alt="dataStore.appLogoAlt"
      />
    </div>
    <v-toolbar-title class="d-none d-sm-flex">
      {{ dataStore.appName }}
    </v-toolbar-title>

    <div class="flex-grow-1"/>

    <NuxtLink
      to="/"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-200ms"
      exact
    >
      Home
    </NuxtLink>
    <NuxtLink
      v-if="dataStore.appAbout"
      to="/about"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-300ms"
      exact
    >
      Nosotros
    </NuxtLink>
    <NuxtLink
      v-if="dataStore.appDelivery"
      to="/delivery"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-300ms"
      exact
    >
      Delivery
    </NuxtLink>
    <!--      <a
      :href="appLinkDelivery"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-300ms"
      target="_blank"
    >
      Delivery
    </a>-->
    <NuxtLink
      v-if="dataStore.appBook"
      to="/book"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-400ms"
      exact
    >
      Reservas
    </NuxtLink>
    <NuxtLink
      v-if="dataStore.appMenu"
      to="/menu"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-400ms"
      exact
    >
      Carta
    </NuxtLink>
    <!--      <a
      href="https://qr.bistrosuite.io/es/fryer-house"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-500ms"
      target="_blank"
    >
      Carta
    </a>-->
    <NuxtLink
      to="/contact"
      activeClass="active-link"
      class="Header__Link d-none d-sm-flex k-anim k-zoomIn fast300 delay-700ms"
      exact
    >
      Contacto
    </NuxtLink>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="start"
    :scrim="true"
    width="500"
    :theme="'dark'"
    :color="dataStore.appGraphicsDrawerBg"
  >
    <v-list nav>
      <v-list-item-title class="title text-white text-center mt-8">
        {{ dataStore.appName }}
      </v-list-item-title>

      <v-list-item rounded="xl" to="/" value="/" activeClass="active-link" class="text-white text-center mt-12">
        <v-list-item-title class="text-white">Home</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="dataStore.appAbout" rounded="xl" to="/about" value="/about" activeClass="active-link" class="text-white text-center">
        <v-list-item-title class="text-white">Nosotros</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="dataStore.appDelivery" rounded="xl" to="/delivery" value="/delivery" activeClass="active-link" class="text-white text-center">
        <v-list-item-title  class="text-white">Delivery</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="dataStore.appBook" rounded="xl" to="/book" value="/book" activeClass="active-link" class="text-white text-center">
        <v-list-item-title  class="text-white">Reservas</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="dataStore.appMenu" rounded="xl" to="/menu" value="/menu" activeClass="active-link" class="text-white text-center">
        <v-list-item-title  class="text-white">Carta</v-list-item-title>
      </v-list-item>

      <v-list-item v-if="dataStore.appContact" rounded="xl" to="/contact"  value="/contact" activeClass="active-link" class="text-white text-center">
        <v-list-item-title class="text-white">Contacto</v-list-item-title>
      </v-list-item>

    </v-list>
  </v-navigation-drawer>
</template>


<style lang="scss">
.Header__Link {
  font-family: 'Oswald', sans-serif;
  font-weight: 400;
  font-size: 14px;
  text-transform: uppercase;
  text-decoration: none;
  color: #d8d8d8;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-radius: 6px;
  border-color: rgba(255, 255, 255, 0);
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  padding: 0.5rem 0.8rem;

  a {
    color: white;
  }

  transition: color 500ms, border-color 600ms, background-color 1s;

  &:hover {
    font-weight: 400;
    /*background-color: rgba(85, 115, 255, 0.1);*/
    color: rgba(255, 255, 255, 0.9);
    /*border-width: 1px 0 1px 0;*/
    border-color: rgba(255, 255, 255, 0.5);
  }
}
.active-link {
  color: #919191;
  border-style: solid;
  border-width: 1px 0 1px 0;
  border-radius: 4px;
  border-color: rgba(205, 205, 205, 0.3);
}
.v-application .appbg {
  background-color: rgba(255, 255, 255, 0) !important;
}

.appbar {
  //display: block;
  position: fixed; /* Set the navbar to fixed position */
  top: 0;
  background-color: rgba(255, 255, 255, 0);
}

.app-bar-background {
  background: rgba(18, 18, 18, 0);
}

.theme--dark.v-application {
  background: rgba(18, 18, 18, 0);
}

.nuxt-link-active {
  background-color: rgba(184, 178, 183, 0.16);
}

@mixin nav-childs($values...) {
  @each $var in $values {
    &:nth-child(#{$var}) {
      transition: transform ease-in-out calc(0.2s * #{$var}), display 0.5s;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  @include nav-childs(1, 2, 3, 4, 5);
}

.fade-enter,
.fade-leave-to {
  transform: scale(0);
}
.logo-bar img {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 5px;
}
</style>

<template>
  <NuxtLayout :name="layout">
    <NuxtPage/>
  </NuxtLayout>
</template>
<script setup>
const layout = "default";
</script>
<style lang="scss">
//@import url('https://fonts.googleapis.com/css?family=Oswald:300,500,600,700 rel="stylesheet');
@use "assets/css/_app.scss";
@use "assets/css/_transitions.scss";
@use "assets/css/_k-anim.scss";
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/partials/header/Header.vue";
</script>

<template>
  <div class="container logo-container">
    <img
        class="logo"
        src="./assets/images/cda4f222-84d7-48bb-89df-08093c3cac87.jpg"
        alt="logo"
    />
  </div>
  <Header />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss">
@import 'assets/scss/main.scss';

</style>
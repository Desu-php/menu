<script setup>
import Loading from 'vue3-loading-overlay';
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/partials/header/Header.vue";
import {useLoadingStore} from "./stores/loading";

const loading = useLoadingStore()
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
    <loading
        :active="loading.loading"
        :is-full-page="true"
        :z-index="1"
        :opacity="0"
        background-color="transparent"
    />
    <RouterView />
  </main>
</template>

<style lang="scss">
@import 'assets/scss/main.scss';

</style>
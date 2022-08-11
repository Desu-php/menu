<script setup>
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css';
import { RouterLink, RouterView } from 'vue-router'
import Header from "./components/partials/header/Header.vue";
import {useMenuStore} from "./stores/menu";

const menuStore = useMenuStore()
</script>

<template>
  <div class="container logo-container">
    <img
        class="logo"
        :src="menuStore.menu.image"
        :alt="menuStore.menu.name"
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
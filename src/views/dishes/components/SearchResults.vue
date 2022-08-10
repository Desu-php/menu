<template>
  <div class="mt-20 mb-30 search-results">
    <template v-if="!store.loading">
      <div v-if="store.searchDishes.length" class="container dishes-inner">
        <h2 class="search-title">РЕЗУЛЬТАТ ПОИСКА:</h2>
      </div>
      <Dishes :dishes="store.searchDishes"/>
    </template>
  </div>
</template>

<script setup>
import Dishes from "./Dishes.vue";
import {useDishesStore} from "../../../stores/dishes";

const store = useDishesStore()

</script>

<style scoped>
.mt-20 {
  margin-top: 20px;
}

.mb-30 {
  margin-bottom: 30px;
}

.search-title {
  font-size: 20px;
  margin-bottom: 10px;
}

.search-results {
}
</style>
<template>
  <div v-if="store.searching" class="mt-20 mb-30 search-results">
    <template v-if="!store.loading">
      <div v-if="store.searchLength" class="container dishes-inner">
        <h2 class="search-title">РЕЗУЛЬТАТ ПОИСКА:</h2>
      </div>
      <template
          v-for="(dishes, category) in store.searchDishes"
          :key="category"
      >
        <div  class="container dishes-inner">
          <h2 class="search-title">{{category}}</h2>
        </div>
        <Dishes :dishes="dishes"/>
      </template>

    </template>
  </div>
</template>

<script setup>
import Dishes from "./Dishes.vue";
import {useDishesStore} from "@/stores/dishes";

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
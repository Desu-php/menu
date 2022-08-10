<template>
  <SearchResults v-if="store.searching"/>
  <Dishes v-else :dishes="store.dishes"/>
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
import {useDishesStore} from "../../stores/dishes";
import Dishes from "./components/Dishes.vue";
import SearchResults from "./components/SearchResults.vue";
import {useLanguageStore} from "../../stores/language";

const route = useRoute()
const store = useDishesStore()
const langStore = useLanguageStore()

onMounted(() => {
  getDishes()
})

watch(() => langStore.language, newVal => {
  getDishes()
})

const getDishes = () => {
  const params = {
    menu_slug: route.params.menu,
    category_id: route.params.category_id,
  }

  store.get(params)
}

</script>

<template>
  <SearchResults />
  <Dishes
      v-if="!store.searching"
      :dishes="store.dishes"
      :title="categoryStore.category?.name"
  />
</template>

<script setup>
import {useRoute} from "vue-router";
import {onMounted, watch} from "vue";
import {useDishesStore} from "../../stores/dishes";
import Dishes from "./components/Dishes.vue";
import SearchResults from "./components/SearchResults.vue";
import {useLanguageStore} from "../../stores/language";
import {useCategoryStore} from "../../stores/categories";

const route = useRoute()
const store = useDishesStore()
const langStore = useLanguageStore()
const categoryStore = useCategoryStore()

onMounted(() => {
  if (langStore.language.length){
    getDishes()
    categoryStore.show(route.params.category_id)
  }
})

watch(() => langStore.language, newVal => {
  getDishes()
  categoryStore.show(route.params.category_id)
})

const getDishes = () => {
  const params = {
    menu_slug: route.params.menu,
    category_id: route.params.category_id,
  }

  store.get(params)
}

</script>

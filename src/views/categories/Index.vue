<template>
  <SearchResults v-if="dishStore.searchLength"/>
  <div class="categories container mt-16">
    <CategoryCard
        v-for="category in store.categories"
        :key="category.id"
        :category="category"
    />
  </div>
</template>

<script setup>
import CategoryCard from "./components/CategoryCard.vue";
import {onMounted, watch} from "vue";
import {useRoute} from "vue-router"
import {useCategoryStore} from "@/stores/categories";
import {useLanguageStore} from "@/stores/language";
import SearchResults from "../dishes/components/SearchResults.vue";
import {useDishesStore} from "@/stores/dishes";

const route = useRoute()

const store = useCategoryStore()
const langStore = useLanguageStore()
const dishStore = useDishesStore()
const categoryStore = useCategoryStore()

onMounted(() => {
  if (langStore.language.length) {
    getCategories()
  }
})

watch(() => langStore.language, newVal => {
  getCategories()
})

watch(
    () => route.params.category_id,
    async newId => {
      getCategories()
    }
)

const getCategories = () => {
  const params = {
    institution_slug: route.params.institution,
    menu_slug: route.params.menu,
    parent_id: route.params.category_id
  }
  store.get(params)
  categoryStore.show(route.params.category_id)
}
</script>

<style lang="scss" scoped>

.categories {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  align-items: start;
  padding-bottom: 16px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0 16px 16px 16px;
  }
}

.mt-16 {
  margin-top: 16px;
}

</style>
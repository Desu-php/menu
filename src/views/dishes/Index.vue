<template>
  <section class="dishes">
    <div class="container">
      <div class="dishes-inner">
        <div class="dishes-items">
          <DishesItem
              v-for="dish in store.dishes"
              :key="dish.id"
              :dish="dish"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

import DishesItem from "./components/DishesItem.vue";
import {useRoute} from "vue-router";
import {onMounted} from "vue";
import {useDishesStore} from "../../stores/dishes";

const route = useRoute()
const store = useDishesStore()

onMounted(() => {
  const params = {
    menu_slug: route.params.menu,
    category_id: route.params.category_id,
  }

  store.get(params)

})

</script>

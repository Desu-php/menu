<template>
  <section class="dishes">
    <div class="container">
      <div class="dishes-cat">
        <h3 v-if="title.length" class="dishes-title">{{title}}</h3>
        <div class="dishes-inner  bootstrap-wrapper">
          <div class="row dishes-items">
            <DishesItem
                v-for="dish in dishes"
                :key="dish.id"
                :dish="dish"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import DishesItem from "./DishesItem.vue";

const props = defineProps({
  dishes: {
    type: Array,
    default: () => []
  },
  title: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>
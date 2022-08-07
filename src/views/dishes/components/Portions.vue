<template>
  <div v-if="portions.length" class="dishes-item-portion">
    <div class="dishes-item-portion-title">Порция</div>
    <Portion
        v-for="portion in portions"
        :key="portion.id"
        :portion="portion"
        :name="name"
    />
  </div>
</template>

<script setup>
import Portion from "./Portion.vue";

const props = defineProps({
  portions: {
    type: Array,
    default: []
  },
  name: {
    type: String,
    required: true
  }
})
</script>

<style scoped>

</style>
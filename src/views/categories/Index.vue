<template>
<div class="categories">
  <CategoryCard />
</div>
</template>

<script setup>

import CategoryCard from "./components/CategoryCard.vue";
</script>

<style lang="scss" scoped>

.categories{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
<template>
  <div class="category-item">
    <a
        href="#"
        :style="`background-image:url('${category.image}')`"
        @click.prevent="to"
    >
      <h2>{{ category.name }}</h2>
    </a>
  </div>
</template>

<script setup>
import {RouterLink, useRoute, useRouter} from "vue-router";

const props = defineProps({
  category: {
    type: Object,
    required: true
  }
})

const router = useRouter()
const route = useRoute()

const to = () => {
  const params = {...route.params, category_id: props.category.id}

  if (props.category.has_child) {
    return router.push({name: 'Categories', params})
  } else {
    return router.push({name: 'Dishes', params})
  }

}
</script>

<style lang="scss" scoped>
.category-item {
  position: relative;
  height: 140px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 16px;
    width: 100%;
    height: 100%;
    color: #fff;
    border-radius: 26px;
    text-shadow: 0 2px 3px rgb(0 0 0 / 46%);
    box-shadow: var(--shadow-1);
    background-size: cover;
    background-position: 50%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 26px;
      background: #252525;
      opacity: .3;
    }

    &:focus {
      outline: none;
    }

    h2 {
      text-transform: uppercase;
      font-weight: 400;
      margin: 32px 0 18px;

      position: relative;
      font-size: 24px;
      margin-top: 20px;

      @media (min-width: 420px) {
        font-size: 28px;
      }
    }
  }
}
</style>
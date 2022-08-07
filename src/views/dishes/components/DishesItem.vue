<template>
  <div :class="['dishes-item', {'active': opened}]">
    <div class="dishes-item-wrapper">
      <img
          v-if="dish.image"
          :src="dish.image"
          alt="img"
          class="dishes-item-img"
          @click="openItem"
      />
      <div>
        <div class="dishes-item-top">
          <div class="dishes-item-top-wrapper">
            <h4 class="dishes-item-title">
              {{dish.name}}
            </h4>
          </div>
        </div>
        <p class="dishes-item-description">
          {{dish.description}}
        </p>
      </div>
    </div>
    <Portions
        :portions="dish.portions"
        :name="dish.id"
    />
    <div class="dishes-item-bottom">
      <div class="dishes-item-price"></div>
      <button class="dishes-item-btn">Заказать</button>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue"
import Portions from "./Portions.vue";

const props = defineProps({
  dish: {
    type: Object,
    required: true
  }
})
const opened = ref(false)

const openItem = () => {
  if (window.matchMedia("(max-width: 650px)").matches) {
    opened.value = !opened.value
  }
}
</script>

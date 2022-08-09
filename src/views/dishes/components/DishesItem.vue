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
              {{ dish.name }}
            </h4>
          </div>
        </div>
        <p class="dishes-item-description">
          {{ dish.description }}
        </p>
      </div>
    </div>
    <Portions
        :portions="dish.portions"
        :name="dish.id"
        v-model="portion"
    />
    <div class="dishes-item-bottom">
      <div class="dishes-item-price"></div>
      <button
          v-if="!selectedProduct"
          @click="addToCart(dish)"
          class="dishes-item-btn">
        Выбрать
      </button>
      <NumberInput
          v-else
          v-model="selectedProduct.count"
      />
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref, watch} from "vue"
import Portions from "./Portions.vue";
import {useCartStore} from "../../../stores/cart";
import NumberInput from "../../../components/form/NumberInput.vue";

const props = defineProps({
  dish: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const opened = ref(false)
const portion = ref(props.dish?.portions[0]?.id)

const activePortion = computed(() => {
  return props.dish.portions.find(pr => pr.id === portion.value)
})

const selectedProduct = computed(() => {
  const {product} = cartStore.search(props.dish, activePortion.value)

  return product
})


const openItem = () => {
  if (window.matchMedia("(max-width: 650px)").matches) {
    opened.value = !opened.value
  }
}

const addToCart = (dish) => {
  cartStore.add(dish, activePortion.value)
}

watch(selectedProduct, newVal => {
  if (newVal && newVal.count === 0){
    cartStore.removeById(newVal.product_id)
  }
}, {deep: true})
</script>
<template>
  <div class="col-12 col-md-6 col-lg-4 dishes-item" :class="{'active': opened}">
    <div class="dishes-body">
      <div class="dishes-item-wrapper">
        <div v-if="dish.image" class="img-wrapper">
          <v-lazy-image :src="dish.image" class="dishes-item-img" @click="openItem"/>
        </div>
        <div class="flex-1">
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
    </div>
    <div class="dishes-item-bottom">
      <div class="dishes-item-price" :class="{'invise': !dish.cooking_time}">
        <svg class="h-full w-auto" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7 3.40004V7.00004L9.4 8.20004" stroke="#666666" stroke-linecap="round" stroke-linejoin="round"></path> </svg>
        {{dish.cooking_time}} {{t('min')}}
      </div>
      <button
          v-if="!selectedProduct || selectedProduct.count === 0"
          @click="addToCart(dish)"
          class="dishes-item-btn">
        {{t('Choose')}}
      </button>
      <NumberInput
          v-else
          v-model="selectedProduct.count"
      />
    </div>
  </div>
</template>

<script setup>
import {computed, ref, watch} from "vue"
import Portions from "./Portions.vue";
import {useCartStore} from "../../../stores/cart";
import NumberInput from "../../../components/form/NumberInput.vue";
import VLazyImage from "v-lazy-image";
import {useI18n} from "vue-i18n"

const props = defineProps({
  dish: {
    type: Object,
    required: true
  }
})

const {t} = useI18n({})

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
  if (newVal && newVal.count === 0) {
    cartStore.removeById(newVal.product_id)
  }

}, {deep: true})
</script>

<style scoped lang="scss">
.flex-1{
  flex: 1;
}

.img-wrapper {
  width: auto;
  height: 353px;
  position: relative;

  @media (max-width: 650px) {
    width: 125px;
    height: 125px;
    margin-right: 12px;
    border-radius: 13px;
  }

  @media (max-width: 440px) {
    width: 90px;
    height: 90px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    box-shadow: var(--shadow-0);
  }
}
.active{
  .img-wrapper {
    width: auto;
    height: auto;
    margin-right: 0;
  }
}
</style>
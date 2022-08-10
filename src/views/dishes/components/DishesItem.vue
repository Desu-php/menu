<template>
  <div class="col-12 col-md-6 col-lg-4 dishes-item" :class="{'active': opened}">
    <div class="dishes-body">
      <div class="dishes-item-wrapper">
        <div v-if="dish.image" class="img-wrapper">
          <v-lazy-image :src="dish.image" class="dishes-item-img" @click="openItem"/>
        </div>
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
    </div>
    <div class="dishes-item-bottom">
      <div class="dishes-item-price"></div>
      <button
          v-if="!selectedProduct"
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
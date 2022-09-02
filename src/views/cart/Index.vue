<template>
  <SearchResults v-if="dishStore.searchDishes.length"/>
  <div v-if="ready" class="container bootstrap-wrapper dishes-inner mt-10">
    <template v-if="store.products.length">
      <CartItem
          v-for="product in store.products"
          :key="product.product_id"
          :product="product"
          class="mb-10 p-10"
      />
      <button
          class="dishes-item-btn mw-100 mt-10 mb-10"
          @click="checkout"
      >
        {{ t('Show QR-code') }}
      </button>
      <GDialog
          v-model="modal"
          :max-width="500"
          content-class="modal-content"

      >
        <template #default="{ onClose }">
          <VueQr3
              :width="300"
              :height="300"
              :value="qrValue"
              :corners-square-options="{ type: 'square', color: '#000000' }"
              :dots-options="{type: 'classy'}"
              :qr-options="{'typeNumber':0,'mode':'Byte','errorCorrectionLevel':'H'}"
          />

          <button @click="onClose" class="modal-btn">
            <IconRemove/>
          </button>
        </template>
      </GDialog>
    </template>
    <div v-else>
      <h3>{{ t('Your basket is empty') }}</h3>
    </div>
  </div>
</template>

<script setup>

import CartItem from "./components/CartItem.vue";
import {useCartStore} from "@/stores/cart";
import SearchResults from "../dishes/components/SearchResults.vue";
import {useDishesStore} from "@/stores/dishes";
import {useI18n} from "vue-i18n";
import {onMounted, ref, watch} from "vue";
import IconRemove from "../../components/icons/IconRemove.vue";
import VueQr3 from "qrcode-vue3"
import {useOrderStore} from "@/stores/order";
import {useMenuStore} from "@/stores/menu";
import {useRoute, useRouter} from "vue-router";
import {useLanguageStore} from "@/stores/language";

const route = useRoute()
const router = useRouter()

const store = useCartStore()
const dishStore = useDishesStore()
const orderStore = useOrderStore()
const menuStore = useMenuStore()
const langStore = useLanguageStore()

const {t} = useI18n()

const modal = ref(false)
const qrValue = ref('')
const ready = ref(false)

onMounted(async () => {
  await getDishes()
  ready.value = true
})

watch(() => langStore.language, newVal => {
  getDishes()
})

const getDishes = async () => {
  if (route.query.key && route.query.id) {
    await orderStore.show(route.query.id, {
      key: route.query.key
    })

    store.products = orderStore.products
  } else {
    if (!store.products.length) return;

    try {
      const {data}  = await dishStore.getByIds({
        dishes: store.products.map(product => product.id)
      })

      store.products = store.products.map(product => {
        const findProduct = data.find( item => item.id === product.id)
        return  {...product,...findProduct, portion: findProduct.portions.find(pr => pr.id === product.portion.id)}
      })
    }catch (e){
      console.log('e', e)
    }

  }
}

const checkout = async () => {
  const params = {
    dishes: store.products.map(product => {
      return {id: product.id, portion_id: product.portion.id, count: product.count}
    }),
    menu_id: menuStore.menu.id
  }

  await orderStore.store(params)

  let hostname = location.hostname
  if (location.port) {
    hostname += `:${location.port}`
  }
  qrValue.value = `${location.protocol}//${hostname}${route.path}?key=${orderStore.order.key}&id=${orderStore.order.id}`

  modal.value = true
}
</script>

<style>

</style>
<template>
  <div class="row no-gutters card">
    <div class="col-2 col-lg-2">
      <div class="dish-image"
           :style="`background-image:url(${product.image})`">

      </div>
    </div>
    <div class="col-10 col-lg-10 row no-gutters">
      <div class="col-7 col-lg-9">
        <div class="dish-info">
          <span class="dish-title mr-5">{{ product.name }}</span>
          <span class="badge badge-blue mr-5" v-if="product.portion.name">{{ product.portion.name }}</span>
          <span class="badge badge-light unit mr-5"
                v-if="product.portion.value">{{ product.portion.value }} {{ product.portion.unit.name }}</span>
          <br/>
          <NumberInput v-model="product.count" :small="true"/>
        </div>
      </div>
      <div class="col-3 col-lg-2">
        <span class="price">{{ parseInt(product.portion.price) * product.count }}</span>
        <span class="currency ml-2">SM</span>
      </div>
      <div class="col-2 col-lg-1">
        <a href="#" @click.prevent="onRemove">
          <IconRemove/>
        </a>
      </div>
      <div class="col-md-12 description"><span class="text-muted" v-if="product.description">{{ product.description }}</span></div>
    </div>
  </div>
</template>

<script setup>

import IconRemove from "../../../components/icons/IconRemove.vue";
import NumberInput from "../../../components/form/NumberInput.vue";
import {useCartStore} from "../../../stores/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useCartStore()


const onRemove = () => {
  store.removeById(props.product.product_id)
}

</script>

<style scoped lang="scss">
.dish {
  &-image {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    padding-bottom: 100%;
    border-radius: 4px;
  }

  &-info {
    padding: 0.5rem 1.25rem 0rem 1.25rem;
    flex: 1 1 auto;
    min-height: 1px;
    margin-bottom: 0.75rem;
    font-size: 14px;
  }

  &-title {
    font-family: 'DINPro-Medium', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

}

.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.badge-blue {
  color: #fff;
  background-color: #3982e9;
}

.badge-light {
  color: #212529;
  background-color: #f8f9fa;
}

.unit {
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.ml-10 {
  margin-left: 10px;
}

.mr-5{
  margin-right: 5px;
}

.ml-2 {
  margin-left: 2px;
}

.text-muted {
  color: #6c757d !important;
}

.price, .currency {
  font-weight: 600;
}

.description{
  padding: 0 10px !important;

  @media (max-width: 768px) {
    font-size: 14px;
  }
}

</style>
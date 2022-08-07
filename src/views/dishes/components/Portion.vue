<template>
  <div class="dishes-item-portion-input">
    <input type="radio" v-bind="$attrs" :id="id"/>
    <label class="dishes-item-portion-label" :for="id">
      <span class="portion-input-title">{{ portion.name }} <small v-if="portion.value">{{ showValue(portion) }}</small></span>
      <span class="portion-input-line"></span>
      <span class="portion-input-price">{{ parseInt(portion.price) }} <b v-if="portion.price">SM</b></span>
    </label>
  </div>
</template>

<script setup>
import {v4 as uuidv4} from 'uuid';
import {computed} from "vue";

const props = defineProps({
  portion: {
    type: Object,
    required: true
  },
})

const showValue = ({name, value, unit}) => {
  if (name) {
    return `(${value}) ${unit.code}`
  }

  return `${value} ${unit.code}`
}

const id = computed(() => {
  return uuidv4()
})
</script>

<style scoped>

</style>
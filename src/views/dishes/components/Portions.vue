<template>
  <div v-if="portions.length" class="dishes-item-portion">
    <div v-if="portions.length > 1" class="dishes-item-portion-title">{{t('Portions')}}</div>
    <Portion
        v-for="portion in portions"
        :key="portion.id"
        :portion="portion"
        :name="name"
        v-bind="$attrs"
    />
  </div>
</template>

<script setup>
import Portion from "./Portion.vue";
import {useI18n} from "vue-i18n";


const props = defineProps({
  portions: {
    type: Array,
    default: []
  },
  name: {
    type: [String, Number],
    required: true
  },
})

const {t} = useI18n({})

</script>

<style scoped>

</style>
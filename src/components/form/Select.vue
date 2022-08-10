<template>
  <select
      v-bind="$attrs"
      class="locale-switcher"
      @change="$emit('update:modelValue', $event.target.value)"
  >
    <option
        v-for="option in options"
        :key="option[value]"
        :value="option[value]"
        :selected="option[value] === modelValue"
    >
      {{ option[label] }}
    </option>
  </select>
</template>

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true
  },
  label: {
    type: String,
    default: 'name'
  },
  value: {
    type: String,
    default: 'id'
  },
  modelValue:{
    type:[String,Number],
    required: true
  }
})


</script>

<style lang="scss" scoped>
.locale-switcher {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: 2px solid #8C8C8C;
  border-radius: 6px;
  padding: 2px 22px 2px 6px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  text-transform: uppercase;
  background: #8C8C8C url('/images/icons/down-icon.svg') no-repeat calc(100% - 8px) 9px;
  background-size: 12px;
  color: white;
}
</style>
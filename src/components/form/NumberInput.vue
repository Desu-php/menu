<template>
  <div class="btn-group counter">
    <button @click="$emit('update:modelValue', modelValue - 1)" type="button" class="btn btn-light btn-plus">&#8722;</button>
    <span class="value">{{modelValue}}</span>
    <button @click="$emit('update:modelValue', modelValue + 1)" type="button" class="btn btn-light btn-minus">&#43;</button>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  }
})
</script>

<style scoped lang="scss">
.counter {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  max-width: 10rem;
}

.btn-group {
  position: relative;
  display: -ms-inline-flexbox;
  display: inline-flex;
  vertical-align: middle;
}

.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;

  &-light {
    color: #212529;
    background-color: #f8f9fa;
    border-color: #f8f9fa;

    &:hover {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
    }

    &:focus {
      color: #212529;
      background-color: #e2e6ea;
      border-color: #dae0e5;
      box-shadow: 0 0 0 0.2rem rgb(216 217 219 / 50%);
    }

    &:active{
      color: #212529;
      background-color: #dae0e5;
      border-color: #d3d9df;
    }
  }
}

[type=button]:not(:disabled), [type=reset]:not(:disabled), [type=submit]:not(:disabled), button:not(:disabled) {
  cursor: pointer;
}

.btn-group > .btn {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

.counter .btn {
  font-size: 1.25rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 4px;
}

.btn-group > .btn-group:not(:last-child) > .btn, .btn-group > .btn:not(:last-child):not(.dropdown-toggle) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.value{
  width: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #f8f9fa;
}
</style>
<template>
  <div class="category-item">
    <a style="background-image:url('https://oddmenu.com:3000/image/217460674308904.jpg') ">

    </a>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.category-item{
  position: relative;
  width: 100%;
  height: 140px;

  a {
    .category-item__link {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 16px;
      width: 100%;
      height: 100%;
      color: #fff;
      border-radius: 26px;
      text-shadow: 0 2px 3px rgb(0 0 0 / 46%);
      box-shadow: var(--shadow-1);
      background-size: cover;
      background-position: 50%;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }

    &:focus{
      outline: none;
    }
  }
}
</style>
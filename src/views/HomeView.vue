<template>
  <div class="container logo-container">
    <img
      class="logo"
      src="../assets/images/cda4f222-84d7-48bb-89df-08093c3cac87.jpg"
      alt="logo"
    />
  </div>
  <Header />
  <main>
    <section class="dishes">
      <div class="container">
        <div class="dishes-inner">
          <div class="dishes-cat" id="cat-1">
            <h3 class="dishes-title">Завтраки</h3>
            <div class="dishes-items">
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
            </div>
          </div>
          <div class="dishes-cat" id="cat-2">
            <h3 class="dishes-title">Салаты</h3>
            <div class="dishes-items">
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
            </div>
          </div>
          <div class="dishes-cat" id="cat-3">
            <h3 class="dishes-title">Первые блюда</h3>
            <div class="dishes-items">
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
            </div>
          </div>
          <div class="dishes-cat" id="cat-4">
            <h3 class="dishes-title">Основные блюда</h3>
            <div class="dishes-items">
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
            </div>
          </div>
          <div class="dishes-cat" id="cat-5">
            <h3 class="dishes-title">Десерты</h3>
            <div class="dishes-items">
              <DishesItem />
              <DishesItem />
              <DishesItem />
              <DishesItem />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "../components/partials/Header.vue";
import DishesItem from "../components/partials/DishesItem.vue";
import VueScrollTo from 'vue-scrollto';

export default {
  components: { Header, DishesItem },
  directives: {VueScrollTo}
};
</script>

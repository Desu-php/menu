<template>
  <div :class="['dishes-item', {'active': opened}]">
    <div class="dishes-item-wrapper">
      <img
        src="../../assets/images/dishes-item.jpg"
        alt="img"
        class="dishes-item-img"
        @click="openItem"
      />
      <div>
        <div class="dishes-item-top">
          <div class="dishes-item-top-wrapper">
            <h4 class="dishes-item-title">
              Бульон из домашней курицы с лапшой
            </h4>
            <button class="dishes-item-like" @click="isLiked = !isLiked">
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  v-if="isLiked"
                  fill="#ff0068"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                ></path>
                <path
                  fill-rule="evenodd"
                  v-else
                  d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        <span class="dishes-item-weight">200 / 300 мл</span>
        <p class="dishes-item-description">
          Бульон из домашней курицы с лапшой собственного производства из муки
          высшего сорта
        </p>
      </div>
    </div>
    <div class="dishes-item-portion">
      <div class="dishes-item-portion-title">Порция</div>
      <div class="dishes-item-portion-input">
        <input type="radio" name="portion-input" id="portion-input-1" />
        <label class="dishes-item-portion-label" for="portion-input-1">
          <span class="portion-input-title">Маленькая</span>
          <span class="portion-input-line"></span>
          <span class="portion-input-price">269 <b>₽</b></span>
        </label>
      </div>
      <div class="dishes-item-portion-input">
        <input type="radio" name="portion-input" id="portion-input-2" />
        <label class="dishes-item-portion-label" for="portion-input-2">
          <span class="portion-input-title">Средняя</span>
          <span class="portion-input-line"></span>
          <span class="portion-input-price">269 <b>₽</b></span>
        </label>
      </div>
    </div>
    <div class="dishes-item-bottom">
      <div class="dishes-item-price"><b>389</b> руб.</div>
      <button class="dishes-item-btn">Заказать</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLiked: false,
      opened: false
    };
  },
  methods: {
    openItem() {
      if (window.matchMedia("(max-width: 650px)").matches) {
        this.opened = !this.opened
      }
    },
  },
};
</script>

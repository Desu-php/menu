<template>
  <header class="header">
    <div class="container">
      <div class="header-top">
        <div class="header-top-exit">
          <a class="header-top-exit-link" href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
                class="navbar-nav-svg"
                fill="currentColor"
              ></path>
            </svg>
          </a>
        </div>
        <ul class="header-top-items" v-if="!isSearchOpened">
          <li class="header-top-item">
            <button class="header-top-item-btn" @click="isSearchOpened = true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.822 20.88l-6.353-6.354c.93-1.465 1.467-3.2 1.467-5.059.001-5.219-4.247-9.467-9.468-9.467s-9.468 4.248-9.468 9.468c0 5.221 4.247 9.469 9.468 9.469 1.768 0 3.421-.487 4.839-1.333l6.396 6.396 3.119-3.12zm-20.294-11.412c0-3.273 2.665-5.938 5.939-5.938 3.275 0 5.94 2.664 5.94 5.938 0 3.275-2.665 5.939-5.94 5.939-3.274 0-5.939-2.664-5.939-5.939z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </li>
          <li class="header-top-item">
            <button class="header-top-item-btn">
              <svg
                class="navbar-nav-svg"
                viewBox="0 -28 512.00002 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m471.382812 44.578125c-26.503906-28.746094-62.871093-44.578125-102.410156-44.578125-29.554687 0-56.621094 9.34375-80.449218 27.769531-12.023438 9.300781-22.917969 20.679688-32.523438 33.960938-9.601562-13.277344-20.5-24.660157-32.527344-33.960938-23.824218-18.425781-50.890625-27.769531-80.445312-27.769531-39.539063 0-75.910156 15.832031-102.414063 44.578125-26.1875 28.410156-40.613281 67.222656-40.613281 109.292969 0 43.300781 16.136719 82.9375 50.78125 124.742187 30.992188 37.394531 75.535156 75.355469 127.117188 119.3125 17.613281 15.011719 37.578124 32.027344 58.308593 50.152344 5.476563 4.796875 12.503907 7.4375 19.792969 7.4375 7.285156 0 14.316406-2.640625 19.785156-7.429687 20.730469-18.128907 40.707032-35.152344 58.328125-50.171876 51.574219-43.949218 96.117188-81.90625 127.109375-119.304687 34.644532-41.800781 50.777344-81.4375 50.777344-124.742187 0-42.066407-14.425781-80.878907-40.617188-109.289063zm0 0"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </li>
          <li class="header-top-item">
            <button class="header-top-item-btn">
              <svg
                class="navbar-nav-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
        <div class="header-top-search" v-else>
          <button
            class="header-top-search-close"
            @click="isSearchOpened = false"
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="28"
              viewBox="0 0 22 28"
            >
              <title>close</title>
              <path
                d="M20.281 20.656c0 0.391-0.156 0.781-0.438 1.062l-2.125 2.125c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-4.594-4.594-4.594 4.594c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-2.125-2.125c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l4.594-4.594-4.594-4.594c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.594 4.594-4.594c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062s-0.156 0.781-0.438 1.062l-4.594 4.594 4.594 4.594c0.281 0.281 0.438 0.672 0.438 1.062z"
              ></path>
            </svg>
          </button>
          <input
            type="text"
            class="header-top-search-input"
            placeholder="Поиск"
          />
        </div>
      </div>
      <nav class="header-nav">
        <ul class="header-nav-items">
          <li
            class="header-nav-item"
            v-for="item in navItems"
            :key="item.category"
          >
            <a
              
              :href="item.category"
              class="header-nav-link"
              @click="navClicked(item)"
              >{{ item.title }}</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isSearchOpened: false,
      navItems: [
        {
          title: "Завтраки",
          category: "#cat-1",
        },
        {
          title: "Салаты",
          category: "#cat-2",
        },
        {
          title: "Первые блюда",
          category: "#cat-3",
        },
        {
          title: "Основные блюда",
          category: "#cat-4",
        },
        {
          title: "Десерты",
          category: "#cat-5",
        },
      ],
    };
  },
  methods: {
    navClicked(item) {
      let links = document.querySelectorAll(".header-nav-link");
      links.forEach((link) => link.classList.remove("active"));
      document
        .querySelector(`a[href="${item.category}"]`)
        .classList.add("active");
        document.querySelector(item.category).scrollIntoView({
          behavior: 'smooth',
          block: '-100px'
        });
    },
  },
};
</script>

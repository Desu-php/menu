<template>
  <header class="header">
    <div class="container">
      <div class="header-top">
        <div :class="{'invisible': $route.name === 'Categories'}" class="header-top-exit">
          <a class="header-top-exit-link" href="#" @click.prevent="$router.back()">
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
        <ul class="header-top-items" v-if="!dishStore.searching">
          <li class="header-top-item">
            <button class="header-top-item-btn" @click="dishStore.searching = true">
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
            <Select
                v-model="langStore.language"
                :options="langStore.languages"
                value="key"
                label="code"
            />
          </li>
          <li class="header-top-item cart">
            <button
                class="header-top-item-btn"
                @click="$router.push({name: 'Cart', params: {institution: $route.params.institution, menu: $route.params.menu}})"
            >
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
            <span v-if="cartStore.totalQuantity" class="products-count">{{ cartStore.totalQuantity }}</span>
          </li>
        </ul>
        <div class="header-top-search" v-else>
          <button
              class="header-top-search-close"
              @click="onClose"
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
              @keyup="onSearch"
              v-model.trim="search"
          />
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import {onMounted, ref, watch} from "vue"
import {useCartStore} from "../../../stores/cart";
import {useAsync} from "../../../hooks/useAsync";
import {useDishesStore} from "../../../stores/dishes";
import {useRoute, useRouter} from "vue-router";
import Select from "../../form/Select.vue";
import {useLanguageStore} from "../../../stores/language";
import {useI18n} from "vue-i18n";
import {useMenuStore} from "../../../stores/menu";
import {useLoading} from 'vue3-loading-overlay';

const cartStore = useCartStore()
const dishStore = useDishesStore()
const langStore = useLanguageStore()
const menuStore = useMenuStore()

const route = useRoute()
const router = useRouter()


const loader = useLoading()

const search = ref('')
const {locale} = useI18n({})

watch(() => cartStore.totalQuantity, () => {
  cartStore.setLocalStorage()
})

watch(() => langStore.language, newVal => {
  localStorage.language = newVal
  locale.value = newVal
})

onMounted(async () => {
  await router.isReady();
  const params = {
    menu_slug: route.params.menu,
    institution_slug: route.params.institution
  }

  menuStore.get(params)
  langStore.getLanguages(params)
})

const onClose = () => {
  dishStore.searching = false
}

const time = ref(null)
const {run, loading} = useAsync(params => dishStore.search(params), [])

const onSearch = () => {
  if (search.value.length === 0) {
    dishStore.searchDishes = []
    return false;
  }

  if (time.value) {
    clearTimeout(time.value)
    loader.hide()
  }

  time.value = setTimeout(() => {
    loader.show({
      canCancel: true,
      backgroundColor: 'transparent',
      opacity: 1,
      zIndex: 1,
      blur: "0"
    })
    run({
      menu_slug: route.params.menu,
      institution_slug: route.params.institution,
      search: search.value
    }).finally(() => {
      loader.hide()
    })
  }, 250)
}
</script>

<style scoped lang="scss">
.invisible {
  visibility: hidden;
}

.cart {
  position: relative;

  .products-count {
    background: #47c735;
    border-radius: 50%;
    height: 18px;
    width: 18px;
    align-items: center;
    justify-content: center;
    color: #fff;
    position: absolute;
    margin-left: -7px;
    margin-top: 9px;
    display: inline-flex;
    font-size: 12px
  }
}
</style>
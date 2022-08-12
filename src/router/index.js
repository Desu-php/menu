import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/:institution/:menu',
      name: 'Categories',
      component: () =>  import('@/views/categories/Index.vue')
    },
    {
      path: '/:institution/:menu/cart',
      name: 'Cart',
      component: () =>  import('@/views/cart/Index.vue')
    },
    {
      path: '/:institution/:menu/:category_id',
      name: 'Dishes',
      component: () =>  import('@/views/dishes/Index.vue')
    },
  ]
})

export default router

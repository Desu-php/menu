import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueSmoothScroll, {
  offset: -50
})

app.mount('#app')

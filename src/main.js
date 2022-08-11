import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueSmoothScroll from 'vue3-smooth-scroll'
import i18n from "./locales/i18n";
import 'gitart-vue-dialog/dist/style.css'
import { GDialog } from 'gitart-vue-dialog'




const app = createApp(App)

app.component('GDialog', GDialog)

app.use(createPinia())
app.use(router)
app.use(VueSmoothScroll, {
  offset: -50
})
app.use(i18n)

app.mount('#app')

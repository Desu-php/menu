import {createI18n} from "vue-i18n";
import en from './languages/en.json'
import ru from './languages/ru.json'

const i18n = createI18n({
    legacy: false,
    locale: localStorage.language || 'ru', // set locale
    fallbackLocale: 'ru', // set fallback locale
    messages: {
        en,
        ru
    }
})

export default i18n
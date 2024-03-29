import {defineStore} from 'pinia'
import api from "../api/api";

export const useLanguageStore = defineStore({
    id: 'language',
    state: () => ({
        languages: [],
        language: ''
    }),
    actions: {
        getLanguages(params, key) {
            return api.get('languages', {
                params
            }).then(res => {
                this.languages = res.data
                this.setLanguage(key)
            })
        },
        setLanguage(key) {
            const sng = ['az', 'am', 'by', 'ge', 'kz', 'kg', 'ru', 'tj', 'tm', 'uz']

            let language = window.navigator ? (window.navigator.language ||
                window.navigator.systemLanguage ||
                window.navigator.userLanguage) : '';

            language = language.substring(0, 2).toLowerCase();

            const storageKey = localStorage.getItem(`${key}.language`)

            if (this.languages.find(lg => lg.key === storageKey)) {
                language = storageKey
            } else if (sng.includes(language) && this.languages.find(lg => lg.key === 'ru')) {
                language = 'ru'
            } else if (this.languages.find(lg => lg.key === 'en')) {
                language = 'en'
            } else {
                language = this.languages.find(lg => lg.is_main).key
            }

            this.language = language
        }
    }
})

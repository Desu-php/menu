import {defineStore} from 'pinia'
import api from "../api/api";

export const useLanguageStore = defineStore({
    id: 'language',
    state: () => ({
        languages: [],
        language: localStorage.language || ''
    }),
    actions: {
        getLanguages(params){
            return api.get('languages', {
                params
            }).then(res => {
                this.languages = res.data
            })
        }
    }
})

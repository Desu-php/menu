import {defineStore} from 'pinia'
import api from "../api/api";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: []
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        get(params) {
            return api.get('categories', {
                params
            }).then(res => {
                this.categories = res.data
            })
        }
    }
})

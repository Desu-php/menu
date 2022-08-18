import {defineStore} from 'pinia'
import api from "../api/api";

export const useCategoryStore = defineStore({
    id: 'category',
    state: () => ({
        categories: [],
        loading: false,
        category: {}
    }),
    getters: {
        doubleCount: (state) => state.counter * 2
    },
    actions: {
        get(params) {
            this.categories = []
            return api.get('categories', {
                params,
                loading: true
            }).then(res => {
                this.categories = res.data
            })
        },
        show(id) {
            this.category = {}
            return api.get(`categories/${id}`)
                .then(res => {
                    this.category = res.data
                })
        }
    }
})

import {defineStore} from 'pinia'
import api from "../api/api";

export const useDishesStore = defineStore({
    id: 'dishes',
    state: () => ({
        dishes: []
    }),
    getters: {

    },
    actions: {
        get(params) {
            return api.get('dishes', {
                params
            }).then(res => {
                this.dishes = res.data
            })
        }
    }
})

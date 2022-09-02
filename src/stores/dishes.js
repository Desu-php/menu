import {defineStore} from 'pinia'
import api from "../api/api";

export const useDishesStore = defineStore({
    id: 'dishes',
    state: () => ({
        dishes: [],
        searchDishes: {},
        searching: false,
        loading: false
    }),
    getters: {
        searchLength: state =>  Object.keys(state.searchDishes).length
    },
    actions: {
        get(params) {
            this.dishes = []
            this.loading = true
            return this.dishesReq(params, {loading:true}).then(res => {
                this.dishes = res.data
            }).finally(() => {
                this.loading = false
            })
        },
        dishesReq(params, config) {
            return api.get('dishes', {
                params,
                ...config
            },)
        },
        search(params) {
            this.loading = true
            return api.get('dishes/search', {
                params,
                loading:true
            }).then(res => {
                this.searchDishes = res.data
            }).finally(() => {
                this.loading = false
            })
        },
        getByIds(params){
            return api.get('dishes/ids', {
                params,
                loading: true
            })
        }
    }
})

import {defineStore} from 'pinia'
import api from "../api/api";

export const useOrderStore = defineStore({
    id: 'order',
    state: () => ({
        order: {},
        products: []
    }),
    actions: {
        store(data) {
            return api.post('orders', data, {loading: true})
                .then(res => {
                    this.order = res.data
                })
        },
        show(id,params){
            return api.get(`orders/${id}`, {params, loading: true})
                .then(res => {
                    this.products = res.data
                })
        }
    }
})

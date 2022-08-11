import {defineStore} from 'pinia'
import api from "../api/api";

export const useMenuStore = defineStore({
    id: 'menu',
    state: () => ({
        menu: {}
    }),
    actions: {
        get(params) {
            return api.get('menus', {
                params
            }).then(res => {
                this.menu = res.data
            })
        }
    }
})

import {defineStore} from 'pinia'
import api from "../api/api";
import {clone} from "../utils/object";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        products: localStorage.products ? JSON.parse(localStorage.products) : []
    }),
    getters: {
        totalQuantity: state => {
            let sum = 0
            state.products.forEach(product => {
                sum += product.count
            })

            return sum
        }
    },
    actions: {
        add(dish, portion) {
            const {id, product} = this.search(dish, portion)

            if (!product) {
                const clonedProduct = clone({...dish, portion: portion, count: 1, product_id: id})
                this.products.push(clonedProduct)
            } else {
                product.count++
            }
        },
        remove(dish, portion) {
            const {id, product} = this.search(dish, portion)

            if (product && product.count === 1) {
               this.removeById(id)
            } else {
                product.count--
            }
        },
        removeById(product_id){
            this.products = this.products.filter(product => product.product_id !== product_id)
        },
        search(dish, portion) {
            const id = this.generateId(dish, portion)
            const product = this.getById(id)

            return {
                id,
                product
            }
        },
        getById(product_id) {
            return this.products.find((product) => product.product_id === product_id)
        },
        generateId(dish, portion) {
            return parseInt(`${dish.id}${portion.id}`)
        },
        setLocalStorage() {
            localStorage.products = JSON.stringify(this.products)
        }
    }
})

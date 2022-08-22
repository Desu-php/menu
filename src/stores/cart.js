import {defineStore} from 'pinia'
import {clone} from "@/utils/object";

export const useCartStore = defineStore({
    id: 'cart',
    state: () => ({
        products: []
    }),
    getters: {
        totalQuantity: state => {
            let sum = 0
            state.products.forEach(product => {
                sum += product.count
            })

            return sum
        },
        totalSum: state => {
            let sum = 0

            state.products.forEach(product => {
                sum += (product.portion.price * product.count)
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
        removeById(product_id) {
            this.products = this.products.filter(product => product.product_id !== product_id)
            this.setLocalStorage()
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
        setLocalStorage(key) {
            localStorage[`${key}.products`] = JSON.stringify(this.products)
        },
        setProducts(key) {
            const localKey = `${key}.products`
            this.products = localStorage[localKey] ? JSON.parse(localStorage[localKey]) : []
        }
    }
})

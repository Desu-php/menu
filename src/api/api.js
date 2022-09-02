import axios from "axios";
import {useLoading} from 'vue-loading-overlay'
import router from "@/router";

let loader = null
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
});

axiosInstance.interceptors.request.use(request => {
        if (request.loading) {
            if (loader) loader.hide()
            loader = useLoading().show({
                canCancel: true,
                backgroundColor: 'transparent',
                container: document.getElementById('main')
            });
        }

        request.headers['X-LANG'] = localStorage.getItem(`${router.currentRoute.value.params.institution}.${router.currentRoute.value.params.menu}.language`)

        return request
    },
    (err) => {
        if (loader) {
            loader.hide()
        }
        console.log('loaderrr')
        Promise.reject(err)
    })

axiosInstance.interceptors.response.use(res => {
        if (loader){
            loader.hide()
        }

        const successCode = '0,200,20000,201,204'
        if (successCode.includes(res.status)) {
            return res.data
        }
    },
    (err) => {
        if (loader) {
            loader.hide()
        }
        console.log('loaderrr')
        Promise.reject(err)
    })

export default axiosInstance;
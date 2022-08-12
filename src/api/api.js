import axios from "axios";
import {useLoading} from 'vue-loading-overlay'

let loader = null
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
});

axiosInstance.interceptors.request.use(request => {
        if (request.loading) {

            loader = useLoading().show({
                canCancel: true,
                backgroundColor: 'transparent',
                opacity: 1,
                zIndex: 1,
                blur: "0",
                isFullPage: true,
                container: null
            });
        }

        request.headers['X-LANG'] = localStorage.language

        return request
    },
    (err) => {
        console.log('request', loader)
        if (loader) {
            loader.hide()
        }

        Promise.reject(err)
    })

axiosInstance.interceptors.response.use(res => {
        console.log('respons', loader)
        if (loader.hide) {
            loader.hide()
        }
        const successCode = '0,200,20000,201,204'
        if (successCode.includes(res.status)) {
            return res.data
        }
    },
    (err) => {
        console.log('responserej', loader)
        if (loader) {
            loader.hide()
        }
        Promise.reject(err)
    })

export default axiosInstance;
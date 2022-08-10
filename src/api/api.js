import axios from "axios";
import {useLoading} from 'vue3-loading-overlay';

let loader = useLoading()
const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
});

axiosInstance.interceptors.request.use(request => {
        if (request.loading) {
            loader.show({
                canCancel: true,
                backgroundColor: 'transparent',
                opacity: 1,
                zIndex: 1,
                blur: "0"
            });
        }

        request.headers['X-LANG'] = localStorage.language

        return request
    },
    (err) => {
        Promise.reject(err)
    })

axiosInstance.interceptors.response.use(res => {
        loader.hide()
        const successCode = '0,200,20000,201,204'
        if (successCode.includes(res.status)) {
            return res.data
        }
    },
    (err) => {
        loader.hide()
        Promise.reject(err)
    })

export default axiosInstance;
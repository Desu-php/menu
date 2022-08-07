import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API,
});

axiosInstance.interceptors.response.use(res => {
    const successCode = '0,200,20000,201,204'
    if (successCode.includes(res.status)) {
        return res.data
    }
})

export default axiosInstance;
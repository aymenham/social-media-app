import axios from "axios"

const axiosInstance = axios.create({
    baseURL :"http://localhost:7000/app/api/v1/"
})

export default axiosInstance
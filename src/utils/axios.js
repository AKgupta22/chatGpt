import axios from "axios";
import { baseUrl } from "./constant";

const axiosBase = axios.create({
    baseURL: baseUrl,
});

axiosBase.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        if (token) {
            config.headers.Authorization = `token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosBase;

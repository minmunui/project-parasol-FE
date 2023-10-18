import axios from "axios";

console.log("process.env.REACT_APP_API_URL", process.env.REACT_APP_API_URL)

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;

instance.interceptors.request.use(async (config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

instance.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    },
);
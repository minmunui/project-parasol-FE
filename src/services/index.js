import axios from "axios";



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
        console.log("response", response.data)
        return response.data;
    },
    (error) => {
        if (error.response.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    },
);
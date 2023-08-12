import instance from "./index";

export const getStocks = async () => {
    try {
        const response = await instance.get("/stocks");
        if (response.status === 200) {
            return Promise.resolve(response.data);
        }
    } catch (error) {
        if (error.response) {
            console.log("error.response", error.response);
            const { data } = error.response;
            alert(data.message);
            return Promise.reject(data);
        }
        throw error;
    }
}

export const getStockById = (id) => {
    return instance.get(`/stocks/${id}`);
}
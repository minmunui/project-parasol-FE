import instance from "./index";

export const getStocks = async () => {
  return await instance
    .get("/stocks")
    .then((response) => {
      if (Array.isArray(response)) {
        return response;
      } else throw new Error("서버로부터 받은 데이터가 올바르지 않습니다.");
    })
    .catch((error) => {
      console.log(error);
      throw error;
    });
  // try {
  //     const response = await instance.get("/stocks");
  //     if (response.status === 200) {
  //         return Promise.resolve(response.data);
  //     }
  // } catch (error) {
  //     if (error.response) {
  //         console.log("error.response", error.response);
  //         const { data } = error.response;
  //         alert(data.message);
  //         return Promise.reject(data);
  //     }
  //     throw error;
  // }
};

export const getStockById = (id) => {
  return instance.get(`/stock/${id}`);
};

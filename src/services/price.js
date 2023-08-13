import instance from "./index";

export const getPriceByPage = async (stockCode, page) => {
  try {
    return await instance.get(`/price/${stockCode}/${page}`);
  } catch (error) {
    throw error;
  }
};

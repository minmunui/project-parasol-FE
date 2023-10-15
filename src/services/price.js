import instance from "./index";

export const getPriceByPage = async (stockCode, page) => {
  try {
    return await instance.get(`/prices/${stockCode}/${page}`);
  } catch (error) {
    throw error;
  }
};

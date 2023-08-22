import instance from "./index";

export const getRecommendByPage = (stockCode, page) => {
    return instance.get(`/recommend/${stockCode}/${page}`);
};
import instance from "./index";

export const getRecommendByPage = ({ page, stockCode }) => {
    return instance.get(`/recommend/${stockCode}/${page}`);
};
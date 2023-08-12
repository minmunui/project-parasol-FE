import instance from "./index";

export const getPriceByPage = ({ page, stockCode }) => {
    return instance.get(`/price/${stockCode}/${page}`);
}
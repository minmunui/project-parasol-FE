import { PRICE_DATAS } from "./datas/priceDatas";
import { MAX_PAGE_SIZE } from "../utils/constants";
import { STOCK_DATAS } from "./datas/stockDatas";
import {RECOMMEND_DATA} from "./datas/recommendDatas";

const isExceedPage = (page, dataLength) => {
  page = parseInt(page)
  const MAX_PAGE = dataLength / MAX_PAGE_SIZE + 1;
  if (page < 0) {
    return false;
  }
  return page <= MAX_PAGE;

};
export const getPriceData = (stockCode, page) => {
  page = parseInt(page)
  if (isExceedPage(page, PRICE_DATAS.length)) {
    return PRICE_DATAS.slice(page * MAX_PAGE_SIZE, (page + 1) * MAX_PAGE_SIZE);
  }
  else {
    return []
  }
};

export const getRecommendData = (stockCode, page) => {
  page = parseInt(page)
  if (isExceedPage(page, RECOMMEND_DATA.length)) {
    return RECOMMEND_DATA.slice(page * MAX_PAGE_SIZE, (page + 1) * MAX_PAGE_SIZE);
  }
  else {
    return []
  }
};

export const getAllStockData = () => {
  return Object.values(STOCK_DATAS);
};

export const getStockData = (stockCode) => {
  if (!Object.keys(STOCK_DATAS).includes(stockCode)) {
    throw new Error("종목을 찾을 수 없습니다.");
  }
  return STOCK_DATAS[stockCode];
};

//TODO : 페이지네이션은 0부터 시작하게끔 수정, 페이지네이션 mocking 제작

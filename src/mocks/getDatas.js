import { PRICE_DATAS } from "./datas/priceDatas";
import { MAX_PAGE_SIZE } from "../utils/constants";
import { STOCK_DATAS } from "./datas/stockDatas";
import {RECOMMEND_DATA} from "./datas/recommendDatas";

const isExceedPage = (page, dataLength) => {
  page = parseInt(page)
  const MAX_PAGE = dataLength / MAX_PAGE_SIZE + 1;
  if (page < 0) {
    throw new Error("page는 0보다 작을 수 없습니다.");
  }
  if (page > MAX_PAGE) {
    throw new Error("존재하지 않는 페이지입니다.");
  }
  return true;
};
export const getPriceData = (stockCode, page) => {
  page = parseInt(page)
  if (isExceedPage(page, PRICE_DATAS.length)) {
    return PRICE_DATAS.slice(page * MAX_PAGE_SIZE, (page + 1) * MAX_PAGE_SIZE);
  }
};

export const getRecommendData = (stockCode, page) => {
  page = parseInt(page)
  if (isExceedPage(page, RECOMMEND_DATA.length)) {
    return RECOMMEND_DATA.slice(page * MAX_PAGE_SIZE, (page + 1) * MAX_PAGE_SIZE);
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

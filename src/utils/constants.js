import { getChangePercentage } from "./calculate";

export const MAX_PAGE_SIZE = 10;

export const STOCK_ORDERING = {
  NONE: { compare: (a, b) => 0 },
  CHANGE: {
    ASC: {
      compare: (a, b) =>
        getChangePercentage(a.price.value, a.price.change) -
          getChangePercentage(b.price.value, b.price.change) >
        0
          ? 1
          : -1,
    },
    DESC: {
      compare: (a, b) =>
        getChangePercentage(b.price.value, b.price.change) -
          getChangePercentage(a.price.value, a.price.change) >
        0
          ? 1
          : -1,
    },
  },
  NAME: {
    ASC: { compare: (a, b) => a.name.localeCompare(b.name) },
    DESC: { compare: (a, b) => b.name.localeCompare(a.name) },
  },
  RECOMMEND: {
    ASC: {
      compare: (a, b) => a.recentRecommend.a2c.buy - b.recentRecommend.a2c.buy,
    },
    DESC: {
      compare: (a, b) => b.recentRecommend.a2c.buy - a.recentRecommend.a2c.buy,
    },
  },
};

export const DEFAULT_APP_TITLE =
  "파라솔 - 심층 강화학습을 이용한 주식 추천 시스템";

export const DEFAULT_APP_DESCRIPTION =
  "강화학습 모델의 주식투자 학습 결과를 확인하세요";

export const RECOMMEND = {
  buy: "buy",
  hold: "hold",
  sell: "sell",
};

export const STOCK_NAME = {
5930: "삼성전자",
5380: "현대자동차",
};
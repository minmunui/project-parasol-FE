import { RECOMMEND } from "./constants";

/**
 * 추천이면 빨간색, 아니면 파란색
 * @param {string} recommend
 * @returns {string}
 */
export const getRecommendBgColor = (recommend) => {
  switch (recommend) {
    case RECOMMEND.buy:
      return "bg-red-500 text-white";
    case RECOMMEND.hold:
      return "bg-gray-500 text-white";
    case RECOMMEND.sell:
      return "bg-blue-500 text-white";
    default:
      return "bg-black-500 text-white";
  }
};

/**
 * 추천이면 빨간색, 아니면 파란색
 * @param {string} recommend
 * @returns {string}
 */
export const getRecommendTextColor = (recommend) => {
  switch (recommend) {
    case RECOMMEND.buy:
      return "text-red-500";
    case RECOMMEND.hold:
      return "text-gray-500";
    case RECOMMEND.sell:
      return "text-blue-500";
    default:
      return "text-black-500";
  }
};

/**
 * 추천이면 매수, 아니면 매도
 * @param {string} recommend
 * @returns {string}
 */
export const getRecommendText = (recommend) => {
  switch (recommend) {
    case RECOMMEND.buy:
      return "매수";
    case RECOMMEND.hold:
      return "관망";
    case RECOMMEND.sell:
      return "매도";
    default:
      return "오류";
  }
};

/**
 * 추천수가 50이상이면 true, 아니면 false
 * @param {object} recommend
 * @returns {string}
 */
export const a2cToText = (recommend) => {
  const { buy, hold } = recommend;
  const sell = 100 - buy - hold;
  if (buy > hold && buy > sell) {
    return RECOMMEND.buy;
  } else if (hold > buy && hold > sell) {
    return RECOMMEND.hold;
  }
  return RECOMMEND.sell;
};

export const getA2CRecommendPercent = (a2c, recommend) => {
  switch (recommend) {
    case RECOMMEND.buy:
      return a2c.buy;
    case RECOMMEND.hold:
      return a2c.hold;
    case RECOMMEND.sell:
      return 100 - a2c.buy - a2c.hold;
    default:
      return 0;
  }
};

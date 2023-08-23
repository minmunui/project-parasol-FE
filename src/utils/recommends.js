/**
 * 추천이면 빨간색, 아니면 파란색
 * @param {boolean} isRecommend
 * @returns {string}
 */
export const getRecommendBgColor = (isRecommend) => {
    return isRecommend? "bg-red-500 text-white": "bg-blue-500 text-white"
}

/**
 * 추천이면 빨간색, 아니면 파란색
 * @param {boolean} isRecommend
 * @returns {string}
 */
export const getRecommendTextColor = (isRecommend) => {
    return isRecommend? "text-red-500": "text-blue-500"
}

/**
 * 추천이면 매수, 아니면 매도
 * @param {boolean} isRecommend
 * @returns {string}
 */
export const getRecommendText = (isRecommend) => {
    return isRecommend? "매수": "매도"
}

/**
 * 추천수가 50이상이면 true, 아니면 false
 * @param {number} recommend
 * @returns {boolean}
 */
export const getRecommend = (recommend) => {
    return recommend > 50;
}
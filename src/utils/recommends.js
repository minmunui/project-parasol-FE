/**
 *
 * @param {boolean} isRecommend
 */
export const getRecommendBgColor = (isRecommend) => {
    return isRecommend? "bg-red-500 text-white": "bg-blue-500 text-white"
}

export const getRecommendTextColor = (isRecommend) => {
    return isRecommend? "text-red-500": "text-blue-500"
}

export const getRecommendText = (isRecommend) => {
    return isRecommend? "매수": "매도"
}

export const getRecommend = (recommend) => {
    return recommend > 50;
}
/**
 *
 * @param {boolean} isRecommend
 */
export const getRecommendColor = (isRecommend) => {
    return isRecommend? "bg-red-500 text-white": "bg-blue-500 text-white"
}

export const getRecommendText = (isRecommend) => {
    return isRecommend? "매수": "매도"
}

export const getRecommend = (recommend) => {
    return recommend > 50;
}
/**
 * price와 change를 이용하여 해당 change에 대한 변화율을 계산합니다.
 * @param {number} price
 * @param {number} change
 */
export const getChangePercentage = (price, change) => {
    console.log("price", price, "change", change)
    return (change / (price - change) * 100).toFixed(2);
}
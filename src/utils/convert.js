/**
 * 숫자에 3자리마다 comma를 추가하는 함수
 * @param {number} num
 * @returns {string}
 */
export const comma = (num) => {
  if (num === undefined) return "undefined";
  if (typeof num !== "number" || isNaN(num)) return "not a number";
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const codeToNumber = (code) => {
  return parseInt(code);
};

export const getChangeColor = (change) => {
  if (change === undefined || change === 0) return "text-gray-500";
  else {
    return change > 0 ? "text-red-500" : "text-blue-500";
  }
};

export const getChangeSymbol = (change) => {
  if (change === undefined || change === 0) return "―";
  else {
    return change > 0 ? "▲" : "▼";
  }
};


export const intToCode = (num) => {
    return num.toString().padStart(6, "0");
}
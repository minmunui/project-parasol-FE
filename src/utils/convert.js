/**
 * 숫자에 3자리마다 comma를 추가하는 함수
 * @param {string} num
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
};

export const newLineToBr = (str) => {
  return str.split("\n").map((line, index) => {
    return (
      <>
        {line}
        <br />
      </>
    );
  });
};

/**
 * 숫자를 소수점 n자리까지 자르는 함수, n이 음수면 -n자리까지 0으로 채움
 * @param {number} num
 * @param {number}digits
 * @returns {number|string}
 */
export const sliceDigits = (num, digits) => {
  if (digits < 0) {
    return ((num / Math.pow(10, -digits)).toFixed(0)) * (Math.pow(10, -digits));
  }
  return parseFloat(num.toFixed(digits));
};
/**
 * price와 change를 이용하여 해당 change에 대한 변화율을 계산합니다.
 * @param {number} price
 * @param {number} change
 */
export const getChangePercentage = (price, change) => {
  return ((change / (price - change)) * 100).toFixed(2);
};

export const getFirstDaysOfMonth = (dates) => {
  const reversedDates = [...dates].reverse();
  const firstDayIndices = [];
  let currentMonth = -1;

  for (let i = 0; i < reversedDates.length; i++) {
    const date = new Date(reversedDates[i].date);
    const month = date.getMonth();

    if (month !== currentMonth) {
      firstDayIndices.push(dates.length-i-1);
      currentMonth = month;
    }
  }
  firstDayIndices.splice(0, 1);
  return firstDayIndices;
};

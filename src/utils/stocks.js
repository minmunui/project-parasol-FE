export const getStockName = (value) => {
  const obj = STOCKS
  for (const key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === value) {
      return key;
    }
  }
  return null; // 해당하는 값을 가진 키를 찾지 못한 경우 null을 리턴
}


export const STOCKS = {
  삼성전자 : "005930",
  sk하이닉스 : "000660",
  posco홀딩스 : "005490"
}
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
  삼성전자 : 5930,
  sk하이닉스 : 660,
  posco홀딩스 : 5490,
  현대자동차 : 5380,
  현대건설 : 720
}
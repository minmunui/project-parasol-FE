import { getPriceByPage } from "./price";
import { getRecommendByPage } from "./recommend";

const mergeArrays = (arr1, arr2) => {
  // 병합을 위해 객체를 날짜(date)를 기준으로 맵으로 만듦
  const map = new Map();

  arr1.forEach((item) => {
    map.set(item.date, {
      date: item.date,
      value: item.value,
      change: item.change,
      recommend: null,
      },
    );
  });

  arr2.forEach((item) => {
    if (map.has(item.date)) {
      const existingItem = map.get(item.date);
      existingItem.recommend = item.recommend;
    } else {
      map.set(item.date, {
        date: item.date,
        value: -1,
        change: -1,
        recommend: item.recommend,
      });
    }
  });

  // 맵의 값들을 배열로 변환하여 내림차순 정렬
  return Array.from(map.values()).sort((a, b) => {
    return b.date.localeCompare(a.date);
  });
};

const getGraphDataByPage = async (stockCode, page) => {
  try {
    const prices = await getPriceByPage(stockCode, page);
    const recommends = await getRecommendByPage(stockCode, page);
    return mergeArrays(prices, recommends);
  } catch (error) {
    throw error;
  }
};

export default getGraphDataByPage;

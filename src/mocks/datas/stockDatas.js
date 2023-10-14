export const STOCK_DATAS = {
  5930: {
    name: "삼성전자",
    stockCode: 5930,
    price: {
      date: "2023-08-11",
      value: 4500,
      change: 100,
    },
    recentRecommend:   {
      date: "2023-08-10",
      dqn: { recommend: "buy" },
      a2c: { buy: 40, hold: 30 },
    },
  },
  5380: {
    name: "현대자동차",
    stockCode: 5380,
    price: {
      date: "2023-08-11",
      value: 4500,
      change: -100,
    },
    recentRecommend:   {
      date: "2023-08-10",
      dqn: { recommend: "sell" },
      a2c: { buy: 38, hold: 20 },
    },
  },
};

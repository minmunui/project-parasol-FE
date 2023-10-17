export const RECOMMEND_DATA = [
  {
    date: "2023-08-10",
    dqn: { recommend: "buy" },
    a2c: { buy: 38, hold: 62 },
  },
  {
    date: "2023-08-09",
    dqn: { recommend: "sell" },
    a2c: { buy: 88, hold: 1 },
  },
  {
    date: "2023-08-08",
    dqn: { recommend: "sell" },
    a2c: { buy: 20, hold: 42 },
  },
  {
    date: "2023-08-07",
    dqn: { recommend: "buy" },
    a2c: { buy: 86, hold: 5 },
  },
  {
    date: "2023-08-06",
    dqn: { recommend: "buy" },
    a2c: { buy: 88, hold: 2 },
  },
  {
    date: "2023-08-05",
    dqn: { recommend: "sell" },
    a2c: { buy: 56, hold: 8 },
  },
  {
    date: "2023-08-04",
    dqn: { recommend: "hold" },
    a2c: { buy: 64, hold: 5 },
  },
  {
    date: "2023-08-03",
    dqn: { recommend: "sell" },
    a2c: { buy: 50, hold: 49 },
  },
  {
    date: "2023-08-02",
    dqn: { recommend: "sell" },
    a2c: { buy: 22, hold: 65 },
  },
  {
    date: "2023-08-01",
    dqn: { recommend: "sell" },
    a2c: { buy: 75, hold: 7 },
  },
  {
    date: "2023-07-31",
    dqn: { recommend: "buy" },
    a2c: { buy: 87, hold: 6 },
  },
  {
    date: "2023-07-30",
    dqn: { recommend: "buy" },
    a2c: { buy: 69, hold: 26 },
  },
  {
    date: "2023-07-29",
    dqn: { recommend: "buy" },
    a2c: { buy: 18, hold: 53 },
  },
  {
    date: "2023-07-28",
    dqn: { recommend: "hold" },
    a2c: { buy: 33, hold: 22 },
  },
  {
    date: "2023-07-27",
    dqn: { recommend: "sell" },
    a2c: { buy: 26, hold: 27 },
  },
  {
    date: "2023-07-26",
    dqn: { recommend: "sell" },
    a2c: { buy: 47, hold: 23 },
  },
  {
    date: "2023-07-25",
    dqn: { recommend: "hold" },
    a2c: { buy: 51, hold: 45 },
  },
  {
    date: "2023-07-24",
    dqn: { recommend: "sell" },
    a2c: { buy: 23, hold: 70 },
  },
  {
    date: "2023-07-23",
    dqn: { recommend: "hold" },
    a2c: { buy: 60, hold: 34 },
  },
  {
    date: "2023-07-22",
    dqn: { recommend: "hold" },
    a2c: { buy: 44, hold: 42 },
  },
  {
    date: "2023-07-21",
    dqn: { recommend: "sell" },
    a2c: { buy: 61, hold: 6 },
  },
  {
    date: "2023-07-20",
    dqn: { recommend: "sell" },
    a2c: { buy: 90, hold: 3 },
  },
  {
    date: "2023-07-19",
    dqn: { recommend: "sell" },
    a2c: { buy: 83, hold: 15 },
  },
  {
    date: "2023-07-18",
    dqn: { recommend: "sell" },
    a2c: { buy: 72, hold: 22 },
  },
  {
    date: "2023-07-17",
    dqn: { recommend: "hold" },
    a2c: { buy: 29, hold: 69 },
  },
  {
    date: "2023-07-16",
    dqn: { recommend: "sell" },
    a2c: { buy: 48, hold: 33 },
  },
  {
    date: "2023-07-15",
    dqn: { recommend: "buy" },
    a2c: { buy: 39, hold: 60 },
  },
  {
    date: "2023-07-14",
    dqn: { recommend: "hold" },
    a2c: { buy: 52, hold: 2 },
  },
  {
    date: "2023-07-13",
    dqn: { recommend: "buy" },
    a2c: { buy: 23, hold: 24 },
  },
  {
    date: "2023-07-12",
    dqn: { recommend: "buy" },
    a2c: { buy: 24, hold: 44 },
  },
  {
    date: "2023-07-11",
    dqn: { recommend: "buy" },
    a2c: { buy: 81, hold: 17 },
  },
  {
    date: "2023-07-10",
    dqn: { recommend: "hold" },
    a2c: { buy: 11, hold: 42 },
  },
  {
    date: "2023-07-09",
    dqn: { recommend: "buy" },
    a2c: { buy: 79, hold: 20 },
  },
  {
    date: "2023-07-08",
    dqn: { recommend: "hold" },
    a2c: { buy: 11, hold: 47 },
  },
  {
    date: "2023-07-07",
    dqn: { recommend: "hold" },
    a2c: { buy: 96, hold: 4 },
  },
  {
    date: "2023-07-06",
    dqn: { recommend: "sell" },
    a2c: { buy: 94, hold: 1 },
  },
  {
    date: "2023-07-05",
    dqn: { recommend: "sell" },
    a2c: { buy: 82, hold: 2 },
  },
  {
    date: "2023-07-04",
    dqn: { recommend: "hold" },
    a2c: { buy: 14, hold: 74 },
  },
  {
    date: "2023-07-03",
    dqn: { recommend: "buy" },
    a2c: { buy: 4, hold: 18 },
  },
  {
    date: "2023-07-02",
    dqn: { recommend: "buy" },
    a2c: { buy: 33, hold: 64 },
  },
];

export const SINGLE_RECOMMEND_DATA = RECOMMEND_DATA.map((data) => {
  return {
    date: data.date,
    recommend: data.dqn.recommend,
  };
});

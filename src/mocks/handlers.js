import { rest } from "msw";

export const handlers = [

  rest.get("/stocks", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          name: "삼성전자",
          stockCode: 5930,
          price: {
            date: "2023-08-11",
            value: 4500,
            change: 100,
          },
          recentRecommend: {
            date: "2023-08-11",
            buy: 70,
          },
        },
        {
          name: "현대자동차",
          stockCode: 5930,
          price: {
            date: "2023-08-11",
            value: 4500,
            change: -100,
          },
          recentRecommend: {
            date: "2023-08-11",
            buy: 70,
          },
        },
        {
          name: "현대자동차",
          stockCode: 5930,
          price: {
            date: "2023-08-11",
            value: 4500,
            change: 100,
          },
          recentRecommend: {
            date: "2023-08-11",
            buy: 70,
          },
        },
      ]),
    );
  }),
];

import { rest } from "msw";

export const handlers = [
  rest.get("/stock/:stockCode", (req, res, ctx) => {
    const { stockCode } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        stockCode,
        name: "삼성전자",
        price: {
          date: "2023-08-11",
          value: 4500,
          change: 100,
        },
        recentRecommend: {
          date: "2023-08-11",
          buy: 70,
        },
      }),
    );
  }),

  rest.get("/price/:stockCode/:page", (req, res, ctx) => {
    const { stockCode, page } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        stockCode,
        page,
        price: [
          {
            date: "2023-08-13",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-12",
            value: 4500,
            change: -100,
          },
          {
            date: "2023-08-11",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-10",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-09",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-08",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-07",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-06",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-05",
            value: 4500,
            change: 100,
          },
          {
            date: "2023-08-05",
            value: 4500,
            change: 100,
          },
        ],
      }),
    );
  }),

  rest.get("/recommend/:stockCode/:page", (req, res, ctx) => {
    const { stockCode, page } = req.params;
    return res(
      ctx.status(200),
      ctx.json({
        stockCode,
        page,
        recommend: [
          {
            date: "2023-08-13",
            buy: 70,
          },
          {
            date: "2023-08-12",
            buy: 70,
          },
          {
            date: "2023-08-11",
            buy: 70,
          },
          {
            date: "2023-08-10",
            buy: 70,
          },
          {
            date: "2023-08-09",
            buy: 70,
          },
          {
            date: "2023-08-08",
            buy: 70,
          },
          {
            date: "2023-08-07",
            buy: 70,
          },
          {
            date: "2023-08-06",
            buy: 70,
          },
          {
            date: "2023-08-05",
            buy: 70,
          },
          {
            date: "2023-08-04",
            buy: 70,
          },
        ],
      }),
    );
  }),

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

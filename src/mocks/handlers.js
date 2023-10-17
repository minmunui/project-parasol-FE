import { rest } from "msw";
import { STOCK_DATAS } from "./datas/stockDatas";
import { getPriceData, getRecommendData, getAllStockData } from "./getDatas";

export const handlers = [
  rest.get("/stock/:stockCode", (req, res, ctx) => {
    const { stockCode } = req.params;

    if (Object.keys(STOCK_DATAS).includes(stockCode)) {
      return res(ctx.status(200), ctx.json(STOCK_DATAS[stockCode]));
    }
    return res(
      ctx.status(404),
      ctx.json({
        message: "종목을 찾을 수 없습니다.",
      }),
    );
  }),
  rest.get("/prices/:stockCode/:page", (req, res, ctx) => {
    const { stockCode, page } = req.params;
    return res(ctx.status(200), ctx.json(getPriceData(stockCode, page)));
  }),

  rest.get("/recommend/:stockCode/:page", (req, res, ctx) => {
    const { stockCode, page } = req.params;
    return res(ctx.status(200), ctx.json(getRecommendData(stockCode, page)));
  }),

  rest.get("/stocks", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(getAllStockData()));
  }),
];

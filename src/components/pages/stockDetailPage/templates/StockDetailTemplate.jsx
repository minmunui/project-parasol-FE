import { intToCode } from "../../../../utils/convert";
import PriceGraph from "../molecules/PriceGraph";
import {
  getRecommendText,
  getRecommendTextColor,
} from "../../../../utils/recommends";

const RecommendSummary = ({ recommend }) => {
  const { buy, date } = recommend;
  return (
    <div className={"flex flex-col items-center"}>
      <span className={"flex flex-col text-2xl font-semibold"}>
        <span className={"text-lg"}>{date}기준</span>
        <span className={"font-bold " + getRecommendTextColor(buy)}>
          {getRecommendText(buy)}({buy}%)
        </span>
      </span>
    </div>
  );
};

const StockTitle = ({ stockName, stockCode }) => {
  return (
    <div className={"stock-title"}>
      <h1 className={"text-4xl font-extrabold"}>{stockName}</h1>
      <span className={"text-2xl font-semibold text-gray-500"}>
        ({intToCode(stockCode)})
      </span>
    </div>
  );
};

const StockDetailTemplate = ({ stock }) => {
  const { stockCode, name, recentRecommend } = stock;

  return (
    <div className={"stock-detail-template flex w-full flex-col items-center"}>
        <StockTitle stockName={name} stockCode={stockCode} />
        <RecommendSummary recommend={recentRecommend} />
      <h2 className={"current-price-title text-3xl font-extrabold"}>
        최근 가격
      </h2>
      <PriceGraph stockCode={stockCode} />
    </div>
  );
};

export default StockDetailTemplate;

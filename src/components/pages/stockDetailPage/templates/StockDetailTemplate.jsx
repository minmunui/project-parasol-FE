import { intToCode } from "../../../../utils/convert";
import PriceGraph from "../organisms/PriceGraph";
import {
  getRecommendText,
  getRecommendTextColor,
} from "../../../../utils/recommends";
const RecommendSummary = ({ recommend }) => {
  const { buy, date } = recommend;
  return (
    <div className={"flex flex-col items-center"}>
      <span className={"flex flex-col text-2xl font-semibold"}>
        <span className={"font-bold " + getRecommendTextColor(buy)}>
          {getRecommendText(buy)}({buy}%)
        </span>
        <span className={"text-sm text-gray-500"}>{date}기준</span>
      </span>
    </div>
  );
};

const StockTitle = ({ stockName, stockCode }) => {
  return (
    <div className={"stock-title"}>
      <h1 className={"text-4xl font-extrabold"}>{stockName}</h1>
      <span className={"text-lg font-semibold text-gray-500"}>
        ({intToCode(stockCode)})
      </span>
    </div>
  );
};

const StockDetailTemplate = ({ stock }) => {
  const { stockCode, name, recentRecommend } = stock;

  return (
    <div className={"stock-detail-template flex w-full flex-col items-center"}>
        <div className={"title-wrapper flex py-8 gap-4 items-center"}>
      <StockTitle stockName={name} stockCode={stockCode} />
      <RecommendSummary recommend={recentRecommend} />
        </div>
      <h2 className={"current-price-title text-3xl font-extrabold pb-2"}>
        최근 가격 및 추천도
      </h2>
      <PriceGraph stockCode={stockCode} />
        <div className={"graph-info text-gray-500 text-sm p-2 bg-green-100 w-full mt-4 rounded-2xl"}>
            각 막대는 해당 날짜의 종가를 의미하며 빨간 점은 해당 날짜의 추천도를 0%~100%로 나타냅니다.<br/>
            일반적으로 50%를 기준으로 50% 이상이면 매수, 50% 이하면 매도를 추천합니다.
        </div>
    </div>
  );
};

export default StockDetailTemplate;

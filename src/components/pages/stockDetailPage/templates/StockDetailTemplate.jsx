import { intToCode } from "../../../../utils/convert";
import PriceGraph from "../organisms/PriceGraph";
import {
    getRecommendText,
    getRecommendTextColor,
} from "../../../../utils/recommends";
import { Head } from "../../../commons/atoms/Head";
import {getStockName} from "../../../../utils/stocks";

const RecommendSummary = ({ recommend }) => {
  return (
    <div className={"recommend-summary flex flex-col items-center"}>
      <div className={"recommend-summary flex items-center text-2xl font-bold gap-2"}>
        AI추천 :<span className={"font-bold " + getRecommendTextColor(recommend.recommend)}>
          {getRecommendText(recommend.recommend)}
        </span>
      </div>
        <span className={"text-sm text-gray-500"}>{recommend.date}기준</span>
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
  const { stockCode, recentRecommend } = stock;
  const name = getStockName(stockCode);
  return (
    <div className={"stock-detail-template flex w-full flex-col items-center"}>
      <Head
        title={`${name}(${intToCode(stockCode)}) - 파라솔`}
        description={`${recentRecommend.date}기준 추천도는 ${recentRecommend.recommend}%입니다.`}
      />
      <div className={"title-wrapper flex items-center gap-4 py-8"}>
        <StockTitle stockName={name} stockCode={stockCode} />
        <RecommendSummary recommend={recentRecommend} />
      </div>
      <h2 className={"current-price-title pb-2 text-3xl font-extrabold"}>
        최근 가격 및 추천 추이
      </h2>
      <PriceGraph stockCode={stockCode} />
      <div
        className={
          "graph-info mt-4 w-full rounded-2xl bg-green-100 p-2 text-sm text-gray-500"
        }
      >
        녹색 막대는 해당 날짜의 종가를 의미하며, 그래프 상단의 박스는 해당 날짜의 추천을 의미합니다.
        <br />
      </div>
    </div>
  );
};

export default StockDetailTemplate;

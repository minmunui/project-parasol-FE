import { intToCode } from "../../../../utils/convert";
import PriceGraph from "../organisms/PriceGraph";
import {
    a2cToText, getA2CRecommendPercent,
    getRecommendText,
    getRecommendTextColor,
} from "../../../../utils/recommends";
import { Head } from "../../../commons/atoms/Head";

const RecommendSummary = ({ recommend }) => {
  const a2cRecommend = a2cToText(recommend.a2c);
  return (
    <div className={"recommend-summary flex flex-col items-center"}>
      <div className={"recommend-summary flex items-center text-2xl font-bold gap-2"}>
        DQN :<span className={"font-bold " + getRecommendTextColor(recommend.dqn.recommend)}>
          {getRecommendText(recommend.dqn.recommend)}
        </span>
          A2C :<span className={"font-bold " + getRecommendTextColor(a2cRecommend)}>
          {getRecommendText(a2cRecommend)}({getA2CRecommendPercent(recommend.a2c, a2cRecommend)}%)
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
  const { stockCode, name, recentRecommend } = stock;

  return (
    <div className={"stock-detail-template flex w-full flex-col items-center"}>
      <Head
        title={`${name}(${intToCode(stockCode)}) - 파라솔`}
        description={`${recentRecommend.date}기준 추천도는 ${recentRecommend.buy}%입니다.`}
      />
      <div className={"title-wrapper flex items-center gap-4 py-8"}>
        <StockTitle stockName={name} stockCode={stockCode} />
        <RecommendSummary recommend={recentRecommend} />
      </div>
      <h2 className={"current-price-title pb-2 text-3xl font-extrabold"}>
        최근 가격 및 추천도
      </h2>
      <PriceGraph stockCode={stockCode} />
      <div
        className={
          "graph-info mt-4 w-full rounded-2xl bg-green-100 p-2 text-sm text-gray-500"
        }
      >
        녹색 막대는 해당 날짜의 종가를 의미하며, 아래의 빨간 바는 해당 날짜의
        추천도를 나타냅니다.
        <br />
        추천도가 가장 높은 행동이 모델이 예측하여 추천하는 행동입니다.
      </div>
    </div>
  );
};

export default StockDetailTemplate;

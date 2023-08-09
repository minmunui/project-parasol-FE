import RecommendBadge from "../../commons/RecommendBadge";
import { getRecommend } from "../../../utils/recommends";
import { comma, getChangeColor, getChangeSymbol } from "../../../utils/convert";
import { getChangePercentage } from "../../../utils/calculate";
import { FormatContext } from "../../../App";
import { useContext } from "react";

const StockCard = ({ stock }) => {
  const { name, stockCode, price, change, recommend } = stock;
  const { isPercent } = useContext(FormatContext);
  return (
    <div className="stock-card w-full max-w-[300px] rounded-xl border border-gray-300 p-2">
      <div className="stock-name-row flex items-center justify-between">
        <div className="stock-card-name text-lg font-bold">{name}</div>
        <div className="stock-card-stock-code text-sm text-gray-500">
          {stockCode}
        </div>
      </div>
      <div className="stock-info-row flex flex-row justify-between">
        <div className="stock-card-price flex">
            {comma(price)}<span className={"text-sm flex items-end"}>KRW</span>
          <div className={"stock-card-change " + getChangeColor(change)}>
            {getChangeSymbol(change)}
            {isPercent
              ? getChangePercentage(price, change) + "%"
              : comma(change)}
          </div>
        </div>
        <RecommendBadge recommend={getRecommend(recommend)} />
      </div>
    </div>
  );
};

export default StockCard;

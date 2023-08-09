import RecommendBadge from "../../commons/atoms/RecommendBadge";
import { getRecommend } from "../../../utils/recommends";
import { comma, getChangeColor, getChangeSymbol } from "../../../utils/convert";
import { getChangePercentage } from "../../../utils/calculate";
import { FormatContext } from "../../../App";
import { useContext } from "react";

const StockCard = ({ stock }) => {
  const { name, stockCode, price, change, recommend } = stock;
  const { isPercent } = useContext(FormatContext);
  return (
    <div className="stock-card w-full rounded-xl border-2 border-gray-300 px-4 py-2 transform ease-in-out transition-all hover:scale-[102%] cursor-pointer">
      <div className="stock-name-row flex items-center justify-between">
        <div className="stock-card-name text-lg font-bold line-clamp-1">{name}</div>
        <div className="stock-card-stock-code text-sm text-gray-500">
          {stockCode}
        </div>
      </div>
      <div className="stock-info-row flex flex-row justify-between">
        <div className="stock-card-price flex font-semibold">
          {comma(price)}
          <span className={"flex items-end text-sm"}>KRW</span>
          <div className={"stock-card-change text-sm flex items-end " + getChangeColor(change)}>
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

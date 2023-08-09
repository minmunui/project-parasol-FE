import RecommendBadge from "../../commons/RecommendBadge";
import { getRecommend } from "../../../utils/recommends";
import {comma, getChangeColor, getChangeSymbol} from "../../../utils/convert";
import {getChangePercentage} from "../../../utils/calculate";

const StockCard = ({ stock }) => {
  const { name, stockCode, price, change, recommend } = stock;

  return (
    <div className="stock-card w-full max-w-[300px]">
      <div className="stock-name-row flex justify-between">
        <div className="stock-card-name text-lg font-bold">{name}</div>
        <div className="stock-card-stock-code">{stockCode}</div>
      </div>
      <div className="stock-info-row flex flex-row justify-between">
        <div className={"stock-price-info flex " + getChangeColor(change)}>
          <div className="stock-card-price">{comma(price)}</div>
            {getChangeSymbol(change)}
          <div className="stock-card-change">{comma(change)}</div>
          <div className="stock-card-change-percent">{getChangePercentage(price, change)}</div>
        </div>
        <RecommendBadge recommend={getRecommend(recommend)} />
      </div>
    </div>
  );
};

export default StockCard;

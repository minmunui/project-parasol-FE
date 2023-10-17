import RecommendBadge from "../../../commons/atoms/RecommendBadge";
import {
  comma,
  getChangeColor,
  getChangeSymbol,
  intToCode,
} from "../../../../utils/convert";
import { getChangePercentage } from "../../../../utils/calculate";
import { TooltipContext } from "../../../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {getStockName} from "../../../../utils/stocks";

const StockCard = ({ stock }) => {
  const { stockCode, price, recentRecommend } = stock;
  const name = getStockName(stockCode)
  const { value, change } = price;
  const { hideTooltip, showTooltip } = useContext(TooltipContext);

  const navigate = useNavigate();
  return (
    <div
      className="stock-card w-full min-w-[250px] transform cursor-pointer rounded-xl border-2 border-gray-300 px-4 py-2 transition-all ease-in-out hover:scale-[102%]"
      onClick={() => {
        navigate(`/stock/${stockCode}`);
      }}
    >
      <div className="stock-name-row flex items-center justify-between">
        <div className="stock-card-name line-clamp-1 text-lg font-bold">
          {name}
        </div>
        <div className="stock-card-stock-code text-sm text-gray-500">
          {intToCode(stockCode)}
        </div>
      </div>
      <div className="stock-info-row mb-2 flex flex-row justify-between">
        <div
          className="stock-card-price flex font-semibold"
          onMouseEnter={() => {
            showTooltip(`${stock.price.date} 기준`);
          }}
          onMouseLeave={() => {
            hideTooltip();
          }}
        >
          {comma(value)}
          <span className={"flex items-end text-sm"}>원</span>
          <div
            className={
              "stock-card-change flex items-end text-sm " +
              getChangeColor(change)
            }
          >
            {getChangeSymbol(change)}
            {comma(change)}({getChangePercentage(value, change)}%)
          </div>
        </div>
        <RecommendBadge recommend={recentRecommend.recommend} />
      </div>
    </div>
  );
};

export default StockCard;

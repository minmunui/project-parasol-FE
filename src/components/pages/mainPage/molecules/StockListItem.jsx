import { getChangePercentage } from "../../../../utils/calculate";
import {
  comma,
  getChangeColor,
  getChangeSymbol,
  intToCode,
} from "../../../../utils/convert";
import { useNavigate } from "react-router-dom";
import { TooltipContext } from "../../../../App";
import { useContext } from "react";
import RecommendBadge from "../../../commons/atoms/RecommendBadge";
import {getStockName} from "../../../../utils/stocks";

const StockListItem = ({ stock }) => {
  const navigate = useNavigate();
  const { hideTooltip, showTooltip } = useContext(TooltipContext);
  return (
    <>
      <div
        className={
          "stock-list-item flex w-full cursor-pointer justify-between gap-3 font-semibold transition-all hover:scale-[102%] hover:bg-green-100"
        }
        onClick={() => {
          navigate(`/stock/${stock.stockCode}`);
        }}
      >
        <div className={"stock-title flex w-1/2 justify-between"}>
          <span className={"stock-name line-clamp-1 text-left"}>
            {getStockName(stock.stockCode)}
          </span>
          <span className={"stock-code text-sm text-gray-500"}>
            {intToCode(stock.stockCode)}
          </span>
        </div>
        <div
          className={"stock-price w-1/2 text-end"}
          onMouseEnter={() => {
            showTooltip(`${stock.price.date} 기준`);
          }}
          onMouseLeave={() => {
            hideTooltip();
          }}
        >
          {comma(stock.price.value)}원
        </div>
        <div
          className={
            "stock-change w-1/2 text-end " + getChangeColor(stock.price.change)
          }
        >
          {comma(stock.price.change)}원 {getChangeSymbol(stock.price.change)}
        </div>
        <div
          className={
            "stock-change-rate w-1/2 text-end " +
            getChangeColor(stock.price.change)
          }
        >
          {getChangePercentage(stock.price.value, stock.price.change) + "%"}{" "}
          {getChangeSymbol(stock.price.change)}
        </div>
        <div
          className={"stock-recommend flex w-1/2 justify-center"}
          onMouseEnter={() => {
            showTooltip(`${stock.recentRecommend.date} 기준`);
          }}
          onMouseLeave={() => {
            hideTooltip();
          }}
        >
          <RecommendBadge recommend={stock.recentRecommend.recommend} />
        </div>
      </div>
      <hr />
    </>
  );
};

export default StockListItem;

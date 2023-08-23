import { getChangePercentage } from "../../../../utils/calculate";
import {
  comma,
  getChangeColor,
  getChangeSymbol,
} from "../../../../utils/convert";
import RecommendBar from "../../../commons/atoms/RecommendBar";
import { useNavigate } from "react-router-dom";
import { TooltipContext } from "../../../../App";
import { useContext } from "react";

const StockListItem = ({ stock }) => {
  const navigate = useNavigate();
  const { hideTooltip, showTooltip } =
    useContext(TooltipContext);
  console.log(stock)
  return (
    <div
      className={
        "stock-list-item flex w-full cursor-pointer justify-between gap-3 font-semibold transition-all hover:scale-[102%] hover:bg-green-100"
      }
      onClick={() => {
        navigate(`/stock/${stock.stockCode}`);
      }}
    >
      <div className={"stock-title flex w-1/2 justify-between"}>
        <span className={"stock-name"}>{stock.name}</span>
        <span className={"stock-code text-sm text-gray-500"}>
          {stock.stockCode}
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
        {comma(stock.price.value)}₩
      </div>
      <div
        className={
          "stock-change w-1/2 text-end " + getChangeColor(stock.price.change)
        }
      >
        {comma(stock.price.change)}₩ {getChangeSymbol(stock.price.change)}
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
      <div className={"stock-recommend flex w-1/2 items-center"}
           onMouseEnter={() => {
             showTooltip(`${stock.recentRecommend.date} 기준`);
           }}
           onMouseLeave={() => {
             hideTooltip();
           }}>
        <RecommendBar recommend={stock.recentRecommend.buy} />
      </div>
    </div>
  );
};

export default StockListItem;

import RecommendBadge from "../../../commons/atoms/RecommendBadge";
import { getRecommend } from "../../../../utils/recommends";
import {
  codeToNumber,
  comma,
  getChangeColor,
  getChangeSymbol, intToCode,
} from "../../../../utils/convert";
import { getChangePercentage } from "../../../../utils/calculate";
import { FormatContext } from "../../../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecommendBar from "../../../commons/atoms/RecommendBar";

const StockCard = ({ stock }) => {
  const { name, stockCode, price, recentRecommend } = stock;
  const { value, change } = price;
  const { isPercent } = useContext(FormatContext);

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
        <div className="stock-card-price flex font-semibold">
          {comma(value)}
          <span className={"flex items-end text-sm"}>KRW</span>
          <div
            className={
              "stock-card-change flex items-end text-sm " +
              getChangeColor(change)
            }
          >
            {getChangeSymbol(change)}
            {isPercent
              ? getChangePercentage(value, change) + "%"
              : comma(change)}
          </div>
        </div>
        <RecommendBadge recommend={getRecommend(recentRecommend.buy)} />
      </div>
      <RecommendBar recommend={recentRecommend.buy} />
    </div>
  );
};

export default StockCard;

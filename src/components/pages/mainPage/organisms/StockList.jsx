import StockListItem from "../molecules/StockListItem";
import { useEffect, useState } from "react";
import { STOCK_ORDERING } from "../../../../utils/constants";
import { sortStocks } from "../../../../utils/calculate";

const toggleOrdering = (current, ordering) => {
  if (current === ordering.DESC) return STOCK_ORDERING.NONE;
  else if (current === ordering.ASC) return ordering.DESC;
  else return ordering.ASC;
};

/**
 * 정렬 상태에 따라 화살표를 반환합니다.
 * @param {{compare: function(*, *): number}} current
 * @param {{compare: function(*, *): *}} ascend
 * @param {{compare: function(*, *): *}} descent
 * @returns {string}
 */
const getArrow = (current, ascend, descent) => {
  if (current === ascend) return "↑";
  else if (current === descent) return "↓";
  else return "-";
};

const StockList = ({ stocks }) => {
  const [ordering, setOrdering] = useState(STOCK_ORDERING.NONE);

  const [orderedStocks, setOrderedStocks] = useState(stocks);
  useEffect(() =>
  {
    const ordered = sortStocks(stocks, ordering);
    setOrderedStocks(ordered);
  }, [stocks, ordering]);

  return (
    <div className={"stock-list-wrapper w-full overflow-x-scroll"}>
      <div className={"stock-list w-full min-w-[768px] px-4"}>
        <div
          className={"flex h-[40px] w-full items-center justify-between gap-3"}
        >
          <div
            className={
              "flex w-1/2 justify-between text-start text-sm text-gray-500"
            }
          >
            <span
              onClick={() => {
                setOrdering(toggleOrdering(ordering, STOCK_ORDERING.NAME));
              }}
              className={"cursor-pointer"}
            >
              종목명{" "}
              {getArrow(
                ordering,
                STOCK_ORDERING.NAME.ASC,
                STOCK_ORDERING.NAME.DESC,
              )}
            </span>
            <span>종목코드</span>
          </div>
          <div className={"w-1/2 text-end text-sm text-gray-500"}>
            전일 종가
          </div>
          <div className={"w-1/2 text-end text-sm text-gray-500"}>등락</div>
          <div
            className={"w-1/2 text-end text-sm text-gray-500 cursor-pointer"}
            onClick={() => {
              setOrdering(toggleOrdering(ordering, STOCK_ORDERING.CHANGE));
            }}
          >
            등락률{" "}
            {getArrow(
              ordering,
              STOCK_ORDERING.CHANGE.ASC,
              STOCK_ORDERING.CHANGE.DESC,
            )}
          </div>
          <div
              className={"w-1/2 text-center text-sm text-gray-500"}
          >
            AI추천{" "}
          </div>
        </div>
        <div className={"h-[1px] w-full bg-gray-300"}></div>
        <div className={"stock-list-items flex w-full flex-col gap-2 py-2"}>
          {orderedStocks.map((stock, index) => (
            <StockListItem key={index} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockList;

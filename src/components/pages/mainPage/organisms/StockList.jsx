import StockListItem from "../molecules/StockListItem";

const StockList = ({ stocks }) => {
  return (
    <div className={"stock-list-wrapper w-full overflow-x-scroll"}>
      <div className={"stock-list w-full min-w-[768px] px-4"}>
        <div
          className={"flex h-[40px] w-full items-center justify-between gap-3"}
        >
          <div className={"w-1/2 text-start text-sm text-gray-500 flex justify-between"}><span>종목명</span><span>종목코드</span></div>
          <div className={"w-1/2 text-end text-sm text-gray-500"}>
            전일 종가
          </div>
          <div className={"w-1/2 text-end text-sm text-gray-500"}>등락</div>
          <div className={"w-1/2 text-end text-sm text-gray-500"}>등락률</div>
          <div className={"w-1/2 text-center text-sm text-gray-500"}>추천</div>
        </div>
        <div className={"h-[1px] w-full bg-gray-300"}></div>
        <div className={"stock-list-items flex w-full flex-col gap-2 py-2"}>
          {stocks.map((stock) => (
            <StockListItem key={stock.id} stock={stock} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockList;

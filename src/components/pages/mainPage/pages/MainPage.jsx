import StockGrid from "../molecules/StockGrid";
import { getStocks } from "../../../../services/stocks";
import { useQuery } from "react-query";
import { Suspense, useState } from "react";
import { FaSearch, FaTable } from "react-icons/fa";
import StockList from "../organisms/StockList";
import Toggle from "../../../commons/atoms/Toggle";

const MainPage = () => {
  const { data } = useQuery("stocks", getStocks);
  const [isTable, setIsTable] = useState(true);
  return (
    <div
      className={"main-page flex w-full max-w-[1024px] flex-col items-center"}
    >
      <div className={"search flex w-full items-center py-4"}>
        <input
          type={"text"}
          placeholder={"종목명 또는 종목코드를 입력하세요."}
          className={
            "h-[40px] w-full rounded-l-md border-2 border-gray-300 px-2 focus:border-green-300 focus:outline-none"
          }
        />
        <button
          className={
            "flex h-[40px] w-[40px] items-center justify-center rounded-r-md border-b-2 border-r-2 border-t-2 border-gray-300 focus:border-green-300 focus:outline-none"
          }
        >
          <FaSearch />
        </button>
      </div>
      <div className={"options flex w-full justify-end gap-2 px-4"}>
        <Toggle
          label={<FaTable />}
          onClick={() => {
            setIsTable(!isTable);
          }}
          active={isTable}
          className={
            "toggle-button flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-full transition-all " +
            (isTable ? "bg-green-300" : "bg-gray-300")
          }
        />
      </div>

      <Suspense fallback={<div>loading...</div>}>
        {data && isTable && <StockList stocks={data} />}
        {data && !isTable && <StockGrid stocks={data} />}
      </Suspense>
    </div>
  );
};

export default MainPage;

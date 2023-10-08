import StockGrid from "../organisms/StockGrid";
import { getStocks } from "../../../../services/stocks";
import { useQuery } from "react-query";
import { Suspense, useEffect, useState } from "react";
import { FaSearch, FaTable } from "react-icons/fa";
import StockList from "../organisms/StockList";
import Toggle from "../../../commons/atoms/Toggle";
import useInput from "../../../../hooks/useInput";
import { IoClose } from "react-icons/io5";
import { filterStocks } from "../../../../utils/calculate";
import { Head } from "../../../commons/atoms/Head";
import {DEFAULT_APP_DESCRIPTION, DEFAULT_APP_TITLE} from "../../../../utils/constants";

const MainPage = () => {
  const { data, isSuccess } = useQuery("stocks", getStocks);

  const [isTable, setIsTable] = useState(true);
  const [filteredStocks, setFilteredStocks] = useState([]);
  const onSearch = () => {
    if (value && isSuccess) {
      const filtered = filterStocks(data, value);
      setFilteredStocks(filtered);
    } else {
      setFilteredStocks(data);
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setFilteredStocks(data);
    }
  }, [isSuccess, data]);

  const { value, setValue, onChange } = useInput("");

  return (
    <div
      className={"main-page flex w-full max-w-[1024px] flex-col items-center"}
    >
      <Head title={DEFAULT_APP_TITLE} description={DEFAULT_APP_DESCRIPTION}/>
      <div className={"search flex w-full items-center py-4"}>
        <input
          type={"text"}
          placeholder={"종목명 또는 종목코드를 입력하세요."}
          className={
            "h-[40px] w-full rounded-l-md border-2 border-gray-300 px-5 focus:border-green-300 focus:outline-none"
          }
          value={value}
          onChange={onChange}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              onSearch();
            }
          }}
        ></input>
        {value && (
          <button
            className={
              "absolute z-10 h-full translate-x-1 text-sm text-gray-500 "
            }
            onClick={() => {
              setValue("");
              setFilteredStocks(data);
            }}
          >
            <IoClose size={20} />
          </button>
        )}
        <button
          className={
            "flex h-[40px] w-[40px] items-center justify-center rounded-r-md border-b-2 border-r-2 border-t-2 border-gray-300 focus:border-green-300 focus:outline-none"
          }
          onClick={() => {
            onSearch();
          }}
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
        {data && isTable && <StockList stocks={filteredStocks} />}
        {data && !isTable && <StockGrid stocks={filteredStocks} />}
      </Suspense>
    </div>
  );
};

export default MainPage;

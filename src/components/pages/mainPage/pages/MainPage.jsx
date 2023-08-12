import StockGrid from "../molecules/StockGrid";
import { getStocks } from "../../../../services/stocks";
import { useQuery } from "react-query";
import {Suspense, useEffect} from "react";

const stocks = [
  {
    name: "삼성전자  성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 45,
      date: "2021-07-12",
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 80,
      date: "2021-07-12",
    },
  },
  {
    name: "삼성전자",
    stockCode: "005930",
    price: 80000,
    change: 1000,
    recommend: {
      buy: 73,
      date: "2021-07-12",
    },
  },
];

const MainPage = () => {
  const { data, isLoading } = useQuery("stocks", getStocks);
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div
      className={"main-page flex w-full max-w-[1024px] flex-col items-center"}
    >
      <Suspense fallback={<div>loading...</div>}>
        {data && <StockGrid stocks={data} />}
      </Suspense>
    </div>
  );
};

export default MainPage;

import StockGrid from "../molecules/StockGrid";
import { getStocks } from "../../../../services/stocks";
import { useQuery } from "react-query";
import {Suspense} from "react";
const MainPage = () => {
  const { data } = useQuery("stocks", getStocks);
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

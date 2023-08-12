import { useParams } from "react-router-dom";
import { getStockById } from "../../../../services/stocks";
import { useQuery } from "react-query";
import { Suspense } from "react";

const StockDetailPage = () => {
  const id = useParams().id;
  const {data, isLoading, error} = useQuery(`stock${id}`, () => getStockById(id));

  return (
    <div
      className={"stock-detail-page page flex w-full max-w-[1024px] flex-col"}
    >
      <Suspense fallback={<div>loading...</div>}>
        {data && <StockTemplate stock={data.data.response} />}
      </Suspense>
    </div>
  );
};

export default StockDetailPage;

import useFetchPrice from "../../../../hooks/useFetchPrice";

import { useEffect, useRef, useState } from "react";
import GraphBar from "../atoms/GraphBar";
import YAxis from "../atoms/YAxis";

const PriceGraph = ({ stockCode }) => {
  const { prices, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchPrice(stockCode);

  const [maxValue, setMaxValue] = useState(1);
  const [minValue, setMinValue] = useState(0);

  const domObserver = useRef(null);


  useEffect(() => {
    if (prices) {
      setMaxValue(Math.max(...prices.map((price) => price.value)));
      setMinValue(Math.min(...prices.map((price) => price.value)));
    }
  }, [prices]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 0.1 },
    );
    if (domObserver.current && hasNextPage) {
      io.observe(domObserver.current);
    }

    return () => {
      io.disconnect();
    };
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, prices]);

  return (
    <div
      className={
        "graph-wrapper flex w-full max-w-[786px] overflow-hidden rounded-md border-2 border-gray-400 relative"
      }
    >
      <div
        className={
          "graph-contents flex h-[400px] w-full flex-row-reverse items-end gap-4 overflow-x-scroll whitespace-nowrap p-4"
        }
      >
        <YAxis maxValue={maxValue} minValue={minValue} />
        {prices.map((value, index) => (
          <GraphBar
            value={value.value}
            key={index}
            maxValue={maxValue}
            tooltip={`${value.date} ${value.value}₩`}
          />
        ))}
        <div
          ref={domObserver}
          className={"observer h-full w-1 bg-purple-400"}
        ></div>
      </div>
    </div>
  );
};
export default PriceGraph;

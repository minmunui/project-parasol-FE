import useFetchPrice from "../../../../hooks/useFetchPrice";
import GraphBar from "../molecules/GraphBar";
import { useEffect, useRef } from "react";

const PriceGraph = ({ stockCode }) => {
  const { prices, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchPrice(stockCode);

  const maxValue = Math.max(...prices.map((price) => price.value));

  const domObserver = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        console.log("entries", entries);
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
        "graph-wrapper flex overflow-hidden w-full max-w-[786px] rounded-md border-2 border-gray-400"
      }
    >
      <div
        className={
          "graph-contents flex h-[400px] w-full min-w-[780px] flex-row-reverse items-end gap-4 overflow-x-scroll whitespace-nowrap p-4"
        }
      >
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

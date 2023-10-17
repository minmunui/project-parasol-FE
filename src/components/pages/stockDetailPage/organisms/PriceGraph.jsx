import useFetchPrice from "../../../../hooks/useFetchPrice";

import { createContext, useEffect, useRef, useState } from "react";
import YAxis from "../atoms/YAxis";
import GraphBars from "../molecules/GraphBars";
import { useCircularState } from "../../../../hooks/useCircularState";
import { GRAPH_OPTIONS } from "./graphScaleConstants";

export const PriceGraphContext = createContext(null);

const PriceGraph = ({ stockCode }) => {
  const { prices, recommends, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useFetchPrice(stockCode);

  const [maxValue, setMaxValue] = useState(1);
  const [minValue, setMinValue] = useState(0);
  const [isDQN, setIsDQN] = useState(false);

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
  }, [fetchNextPage, hasNextPage, isFetchingNextPage, prices, recommends]);

  const [numGraphScale] = useState(GRAPH_OPTIONS.length - 1);

  // eslint-disable-next-line no-unused-vars
  const [graphScale, setGraphScale, setNextScale, setPrevScale] =
    useCircularState(0, numGraphScale);

  return (
    <PriceGraphContext.Provider
      value={{
        graphScale,
        setNextScale,
        setPrevScale,
        isDQN,
        setIsDQN,
      }}
    >
      <div
        className={
          "graph-wrapper relative flex w-full max-w-[786px] flex-col overflow-hidden rounded-md border-2 border-gray-400"
        }
      >
        <div
          className={
            "graph-contents flex h-[400px] w-full flex-row-reverse items-end overflow-y-visible overflow-x-scroll whitespace-nowrap pb-8 pl-4 pt-4 " +
            GRAPH_OPTIONS[graphScale].barGap
          }
        >
          t
          <YAxis maxValue={maxValue} minValue={minValue} />
          <GraphBars
            prices={prices}
            recommends={recommends}
            maxValue={maxValue}
            minValue={minValue}
          />
          <div
            ref={domObserver}
            className={"observer h-full w-1 bg-gray-300"}
          ></div>
        </div>
      </div>
    </PriceGraphContext.Provider>
  );
};
export default PriceGraph;

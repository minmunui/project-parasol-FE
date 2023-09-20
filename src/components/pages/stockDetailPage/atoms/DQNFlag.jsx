import { GRAPH_OPTIONS } from "../organisms/graphScaleConstants";
import { useContext } from "react";
import { PriceGraphContext } from "../organisms/PriceGraph";

const getFlagColor = (recommend) => {
  if (recommend === "buy") return "bg-red-500";
  else if (recommend === "sell") return "bg-blue-500";
  else return;
};

export const DQNFlag = (recommend) => {
  const { graphScale } = useContext(PriceGraphContext);
  return (
    <div
      className={
        "absolute -top-3 left-0 z-0 h-[10px] " +
        GRAPH_OPTIONS[graphScale].barWidth +
        " " +
        getFlagColor(recommend.recommend)
      }
    ></div>
  );
};

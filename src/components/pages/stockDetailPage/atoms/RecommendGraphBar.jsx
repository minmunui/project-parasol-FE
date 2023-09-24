import { PriceGraphContext } from "../organisms/PriceGraph";
import { useContext } from "react";
import { GRAPH_OPTIONS } from "../organisms/graphScaleConstants";

const RecommendGraphBar = ({ buy, hold, sell }) => {
  const { graphScale } = useContext(PriceGraphContext);
  return (
    <div
      className={"recommend-graph h-full " + GRAPH_OPTIONS[graphScale].barWidth}
    >
      <div
        className={"recommend-graph__sell w-full bg-blue-500"}
        style={{ height: `${sell}%` }}
      ></div>
      <div
        className={"recommend-graph__hold w-full bg-gray-400"}
        style={{ height: `${hold}%` }}
      ></div>
      <div
        className={"recommend-graph__buy w-full bg-red-500"}
        style={{ height: `${buy}%` }}
      ></div>
    </div>
  );
};

export default RecommendGraphBar;

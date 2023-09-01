import { PriceGraphContext } from "../organisms/PriceGraph";
import { useContext } from "react";
import { GRAPH_OPTIONS } from "../organisms/graphScaleConstants";

const RecommendDot = ({ recommend, active }) => {
  const { graphScale } = useContext(PriceGraphContext);
  return (
    <div
      className={
        "recommend-dot absolute z-20 rounded-full transition-all " +
        (active ? "bg-amber-500 " : "bg-red-500 ") +
        GRAPH_OPTIONS[graphScale].dotHeight +
        " " +
        GRAPH_OPTIONS[graphScale].dotWidth
      }
      style={{ bottom: `calc(${(recommend / 100) * 90}% + 10% - 5px)` }}
    ></div>
  );
};

export default RecommendDot;

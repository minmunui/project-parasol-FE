import { PriceGraphContext } from "../organisms/PriceGraph";
import { useContext } from "react";
import { GRAPH_OPTIONS } from "../organisms/graphScaleConstants";

const A2CRecommendDot = ({ recommend, active, state }) => {
  const { graphScale } = useContext(PriceGraphContext);
  return (
    state !== 0 && (
      <>
        {(state === 1 || state === 3) && (
          <div
            className={
              "recommend-dot absolute z-20 rounded-full transition-all " +
              (active ? "bg-blue-500 " : "bg-indigo-500 ") +
              GRAPH_OPTIONS[graphScale].dotHeight +
              " " +
              GRAPH_OPTIONS[graphScale].dotWidth
            }
            style={{
              bottom: `calc(${
                ((recommend.buy + recommend.hold) / 100) * 90
              }% + 10% - 5px)`,
            }}
          ></div>
        )}
        {(state === 2 || state === 3) && (
          <div
            className={
              "recommend-dot absolute z-20 rounded-full transition-all " +
              (active ? "bg-amber-500 " : "bg-red-500 ") +
              GRAPH_OPTIONS[graphScale].dotHeight +
              " " +
              GRAPH_OPTIONS[graphScale].dotWidth
            }
            style={{
              bottom: `calc(${(recommend.buy / 100) * 90}% + 10% - 5px)`,
            }}
          ></div>
        )}
      </>
    )
  );
};

export default A2CRecommendDot;

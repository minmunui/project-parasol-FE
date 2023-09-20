import { TooltipContext } from "../../../../App";
import { useContext, useState } from "react";
import A2CRecommendDot from "./A2CRecommendDot";
import { PriceGraphContext } from "../organisms/PriceGraph";
import { GRAPH_OPTIONS } from "../organisms/graphScaleConstants";
import {DQNFlag} from "./DQNFlag";

/**
 *
 * @param {number} value - 해당 bar가 표시할 value를 나타냅니다.
 * @param {number} recommend - 해당 bar가 표시할 추천도를 나타냅니다. -1이면 추천도 데이터가 없는 것을 의미합니다.
 * @param {number} maxValue - 해당 bar가 표시할 수 있는 가장 큰 수치를 나타냅니다. bar의 길이는 value / maximumValue로 결정됩니다.
 * @param {number} minValue
 * @param {string} tooltip - 해당 bar에 마우스를 올렸을 때 나타날 tooltip을 나타냅니다.
 * @param {boolean} isFirstDay
 * @param {string} date
 * @constructor
 */
const GraphBar = ({
  value,
  recommend,
  maxValue,
  minValue,
  tooltip,
  isFirstDay,
  date,
}) => {
  const { showTooltip, hideTooltip, isTooltipVisible } =
    useContext(TooltipContext);
  const [active, setActive] = useState(false);

  const { graphScale, isDQN, A2CState } = useContext(PriceGraphContext);

  return (
    value && (
      <div
        className={
          "bar-wrapper relative flex h-full flex-col items-center justify-end transition-all " +
          (active ? "bg-gray-100" : "")
        }
        onMouseEnter={() => {
          showTooltip(tooltip);
          setActive(true);
        }}
        onMouseLeave={() => {
          hideTooltip();
          setActive(false);
        }}
        onClick={() => {
          if (!isTooltipVisible) {
            setTimeout(() => showTooltip(tooltip), 40);
          }
        }}
      >
        {isDQN && <DQNFlag recommend={recommend.dqn.recommend} />}
        <div
          className={
            "graph-bar flex w-[14px] flex-shrink-0 transform flex-col items-center transition-all " +
            (isFirstDay ? "z-10 " : "") +
            (active ? "bg-blue-300 " : "bg-green-300 ") +
            GRAPH_OPTIONS[graphScale].barWidth
          }
          style={{
            height: `${
              ((value - minValue) / (maxValue - minValue)) * 90 + 10
            }%`,
          }}
        >
          {isFirstDay && (
            <div
              className={
                "date-axis absolute -bottom-5 z-10 text-xs text-gray-500"
              }
            >
              {date}
            </div>
          )}
        </div>
        {recommend.a2c.buy !== -1 && (
          <A2CRecommendDot active={active} recommend={recommend.a2c} state={A2CState} />
        )}
      </div>
    )
  );
};

export default GraphBar;

import { TooltipContext } from "../../../../App";
import { useContext, useState } from "react";
import RecommendDot from "./RecommendDot";

/**
 *
 * @param {number} value - 해당 bar가 표시할 value를 나타냅니다.
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
        <div
          className={
            "graph-bar flex w-[14px] flex-shrink-0 transform flex-col items-center bg-green-300 transition-all " +
            (isFirstDay ? "z-10 " : "") +
            (active ? "border-2 border-green-700" : "")
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
        {recommend !== -1 && <RecommendDot active={active} recommend={recommend} />}
      </div>
    )
  );
};

export default GraphBar;

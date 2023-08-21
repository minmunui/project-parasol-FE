import { TooltipContext } from "../../../../App";
import { useContext } from "react";

/**
 *
 * @param {number} value - 해당 bar가 표시할 value를 나타냅니다.
 * @param {number} maxValue - 해당 bar가 표시할 수 있는 가장 큰 수치를 나타냅니다. bar의 길이는 value / maximumValue로 결정됩니다.
 * @param {string} tooltip - 해당 bar에 마우스를 올렸을 때 나타날 tooltip을 나타냅니다.
 * @constructor
 */
const GraphBar = ({ value, maxValue, tooltip, isFirstDay, date}) => {
  const { showTooltip, hideTooltip, isTooltipVisible } =
    useContext(TooltipContext);
  return (
    <div
      onMouseEnter={() => {
        showTooltip(tooltip);
      }}
      onMouseLeave={() => {
        hideTooltip();
      }}
      onClick={() => {
        if (!isTooltipVisible) {
          setTimeout(() => showTooltip(tooltip), 40);
        }
      }}
      className={
        "graph-bar flex w-[20px] flex-shrink-0 transform flex-col items-center bg-green-300 transition-all hover:border-2 hover:border-green-700 " +
        (isFirstDay ? "z-10" : "")
      }
      style={{ height: `${(value / maxValue) * 100}%` }}
    >
      {isFirstDay && (
        <div className={"absolute z-10 text-xs text-gray-500 -bottom-5"}>
          {date}
        </div>
      )}
    </div>
  );
};

export default GraphBar;

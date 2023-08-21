import { useContext } from "react";
import { TooltipContext } from "../../../App";

const Tooltip = ({ children, text }) => {
  const { isTooltipVisible, tooltipLocation, tooltipContent } =
    useContext(TooltipContext);
  return (
    <div
      className={
        "tooltip absolute z-20 flex whitespace-nowrap items-center justify-center rounded-md bg-gray-700 text-sm text-white nowrap p-2 " +
        (isTooltipVisible ? "visible" : "invisible")
      }
      style={{
        top: `${tooltipLocation.y+3}px`,
        left: `${tooltipLocation.x+3}px`,
      }}
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;

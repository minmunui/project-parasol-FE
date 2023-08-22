import { useContext } from "react";
import { TooltipContext } from "../../../App";

const Tooltip = ({ children, text }) => {
  const { isTooltipVisible, tooltipLocation, tooltipContent } =
    useContext(TooltipContext);
  return (
    <div
      className={
        "tooltip nowrap fixed z-20 flex items-center justify-center whitespace-nowrap rounded-md bg-gray-700 p-2 text-sm text-white " +
        (isTooltipVisible ? "visible" : "invisible")
      }
      style={{
        top: `${tooltipLocation.y + 3}px`,
        left: `${tooltipLocation.x + 3}px`,
      }}
    >
      {tooltipContent}
    </div>
  );
};

export default Tooltip;

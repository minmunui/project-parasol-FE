import { useContext } from "react";
import { TooltipContext } from "../../../App";
import { newLineToBr } from "../../../utils/convert";

const Tooltip = () => {
  const { isTooltipVisible, tooltipLocation, tooltipContent } =
    useContext(TooltipContext);
  return (
    <div
      className={
        "tooltip nowrap fixed flex items-center justify-center whitespace-nowrap rounded-md bg-gray-700 p-2 text-sm text-white " +
        (isTooltipVisible ? "visible" : "invisible")
      }
      style={{
        top: `${tooltipLocation.y}px`,
        left: `${tooltipLocation.x}px`,
        zIndex: 1000,
      }}
    >
      {newLineToBr(tooltipContent)}
    </div>
  );
};

export default Tooltip;

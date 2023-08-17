import { useState } from "react";
import useMouseLocation from "./useMouseLocation";

const useTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const tooltipLocation = useMouseLocation()
  const [tooltipContent, setTooltipContent] = useState("");
  const showTooltip = (content) => {
    setIsTooltipVisible(true);
    setTooltipContent(content);
  };

  const hideTooltip = () => {
    setIsTooltipVisible(false);
  };

  return {
    isTooltipVisible,
    tooltipLocation,
    hideTooltip,
    showTooltip,
    tooltipContent,
  };
};

export default useTooltip;

import { useEffect, useState } from "react";
import useMouseLocation from "./useMouseLocation";
import useWindowWidth from "./useWindowWidth";

const useTooltip = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const [tooltipLocation, setTooltipLocation] = useState({ x: 0, y: 0 });

  const mouseLocation = useMouseLocation();
  const windowWidth = useWindowWidth();

  useEffect(() => {
    if (isTooltipVisible) {
      if (mouseLocation.x > windowWidth / 2) {
        setTooltipLocation({
          x: mouseLocation.x - 170,
          y: mouseLocation.y + 10,
        });
      } else {
        setTooltipLocation({
          x: mouseLocation.x,
          y: mouseLocation.y + 10,
        });
      }
    }
  }, [mouseLocation, isTooltipVisible, windowWidth]);

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

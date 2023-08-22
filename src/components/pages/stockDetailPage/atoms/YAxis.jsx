import { comma } from "../../../../utils/convert";
import { useRef } from "react";
import useComponentSize from "../../../../hooks/useComponentSize";

const YAxis = ({ maxValue, minValue }) => {
  const yAxis = useRef(null);
  const dummy = useRef(null);

  const yAxisWidth = useComponentSize(yAxis).width;
  return (
    <>
      <div
        className={
          "graph-y-axis absolute top-0 z-50 flex translate-y-2 flex-col content-between justify-between gap-4 text-xs text-gray-500 bg-white h-full pb-[67px] px-1.5"
        }
        ref={yAxis}
      >
        <div className={"y-axis-item"}>{comma(maxValue)}₩</div>
        <div className={"y-axis-item"}>{comma((maxValue + minValue) / 2)}₩</div>
        <div className={"y-axis-item"}>{comma(minValue)}₩</div>
      </div>
      <div
        className={"graph-y-axis-dummy h-full flex-shrink-0 bg-white z-40"}
        style={{ width: yAxisWidth + 8 + "px" }}
        ref={dummy}
      ></div>
    </>
  );
};

export default YAxis;

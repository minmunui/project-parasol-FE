import { comma } from "../../../../utils/convert";
import { useRef } from "react";
import useComponentSize from "../../../../hooks/useComponentSize";

const YAxis = ({maxValue, minValue }) => {
  const yAxis = useRef(null);

  const yAxisWidth = useComponentSize(yAxis).width;
  return (
    <>
      <div
        className={
          "graph-y-axis absolute z-10 flex h-[calc(400px-14px)] translate-y-2 flex-col content-between justify-between"
        }
        ref={yAxis}
      >
        <div className={"y-axis-item"}>{comma(maxValue)}₩</div>
        <div className={"y-axis-item"}>{comma((maxValue + minValue) / 2)}₩</div>
        <div className={"y-axis-item"}>{comma(minValue)}₩</div>
      </div>
      <div
        className={"graph-y-axis-dummy h-full flex-shrink-0 bg-white"}
        style={{ width: yAxisWidth + 20 + "px" }}
      ></div>
    </>
  );
};

export default YAxis;

import { comma } from "../../../../utils/convert";
import { useRef } from "react";
import useComponentSize from "../../../../hooks/useComponentSize";

const YAxis = ({maxValue, minValue }) => {
  const yAxis = useRef(null);
  const dummy = useRef(null);

  const yAxisWidth = useComponentSize(yAxis).width;
  const dummyHeight = useComponentSize(dummy).height
  return (
    <>
      <div
        className={
          "graph-y-axis absolute z-20 flex translate-y-2 flex-col content-between justify-between"
        }
        style={{ height: dummyHeight + 20 + "px" }}
        ref={yAxis}
      >
        <div className={"y-axis-item"}>{comma(maxValue)}₩</div>
        <div className={"y-axis-item"}>{comma((maxValue + minValue) / 2)}₩</div>
        <div className={"y-axis-item"}>{comma(minValue)}₩</div>
      </div>
      <div
        className={"graph-y-axis-dummy h-full flex-shrink-0 bg-white"}
        style={{ width: yAxisWidth + 20 + "px" }}
        ref={dummy}
      ></div>
    </>
  );
};

export default YAxis;

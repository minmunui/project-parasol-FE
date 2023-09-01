import { comma, sliceDigits } from "../../../../utils/convert";
import { useContext, useRef } from "react";
import useComponentSize from "../../../../hooks/useComponentSize";
import { PriceGraphContext } from "../organisms/PriceGraph";
import { BiMinus, BiPlus } from "react-icons/bi";

const YAxis = ({ maxValue, minValue }) => {
  const yAxis = useRef(null);
  const dummy = useRef(null);
  const { setNextScale, setPrevScale, graphScale } =
    useContext(PriceGraphContext);
  const yAxisWidth = useComponentSize(yAxis).width;
  return (
    <>
      <div
        className={
          "graph-y-axis absolute top-0 z-50 flex flex-col content-between justify-between gap-4 text-xs text-gray-500 bg-white h-full pb-[58px] px-1.5 pt-2 border-l-2 border-l-gray-300"
        }
        ref={yAxis}
      >
        <div className={"y-axis-item"}>{comma(sliceDigits(maxValue, -1))}₩</div>
        <div className={"y-axis-item"}>
          {comma(sliceDigits(((maxValue - minValue) * 2) / 3 + minValue, -1))}₩
        </div>
        <div className={"y-axis-item"}>
          {comma(sliceDigits((maxValue - minValue) / 3 + minValue, -1))}₩
        </div>
        <div className={"y-axis-item"}>{comma(sliceDigits(minValue, -1))}₩</div>
        <div
          className={
            "scaling-buttons absolute bottom-0 left-0 z-[1000] flex w-full justify-between px-1 pb-4 "
          }
        >
          <button
            className={
              "flex w-1/2 justify-center border-b border-l border-t border-gray-400 p-1 hover:bg-gray-100"
            }
            onClick={() => {
              if (graphScale <= 1) setNextScale();
            }}
          >
            <BiPlus />
          </button>
          <button
            className={
              "flex w-1/2 justify-center border-b border-r border-t border-gray-400 p-1 hover:bg-gray-100"
            }
            onClick={() => {
              if (graphScale >= 1) setPrevScale();
            }}
          >
            <BiMinus />
          </button>
        </div>
      </div>
      <div
        className={"graph-y-axis-dummy z-40 h-full flex-shrink-0 bg-white"}
        style={{ width: yAxisWidth + 6 + "px" }}
        ref={dummy}
      ></div>
    </>
  );
};

export default YAxis;

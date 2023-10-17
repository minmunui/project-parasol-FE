import { comma, sliceDigits } from "../../../../utils/convert";
import { useContext, useRef } from "react";
import useComponentSize from "../../../../hooks/useComponentSize";
import { PriceGraphContext } from "../organisms/PriceGraph";
import { BiMinus, BiPlus } from "react-icons/bi";

const YAxis = ({ maxValue, minValue }) => {
  const yAxis = useRef(null);
  const dummy = useRef(null);
  const { setNextScale, setPrevScale } = useContext(PriceGraphContext);
  const yAxisWidth = useComponentSize(yAxis).width;
  return (
    <>
      <div
        className={
          "graph-y-axis absolute top-0 z-50 flex h-full flex-col content-between justify-between border-l-2 border-l-gray-300 bg-white px-1.5 pt-2 text-xs text-gray-500"
        }
        ref={yAxis}
      >
        <div className={"price-axis-indicator h-[85%] flex flex-col justify-between"}>
          <div className={"y-axis-item"}>
            {comma(sliceDigits(maxValue, -1))}원
          </div>
          <div className={"y-axis-item"}>
            {comma(sliceDigits(((maxValue - minValue) * 2) / 3 + minValue, -1))}
            ₩
          </div>
          <div className={"y-axis-item"}>
            {comma(sliceDigits((maxValue - minValue) / 3 + minValue, -1))}원
          </div>
          <div className={"y-axis-item"}>
            {comma(sliceDigits(minValue, -1))}원
          </div>
        </div>
        <div
          className={
            "scaling-buttons z-[1000] flex h-8 w-full justify-between px-1 py-1"
          }
        >
          <button
            className={
              "flex w-1/2 justify-center border-b border-l border-t border-gray-400 p-1 hover:bg-gray-100"
            }
            onClick={() => {
              setNextScale();
            }}
          >
            <BiMinus />
          </button>
          <button
            className={
              "flex w-1/2 justify-center border-b border-r border-t border-gray-400 p-1 hover:bg-gray-100"
            }
            onClick={() => {
              setPrevScale();
            }}
          >
            <BiPlus />
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

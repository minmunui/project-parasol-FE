import GraphBar from "../atoms/GraphBar";
import { useContext, useEffect, useState } from "react";
import { getFirstDaysOfMonth } from "../../../../utils/calculate";
import { comma } from "../../../../utils/convert";
import { PriceGraphContext } from "../organisms/PriceGraph";

const GraphBars = ({ prices, recommends, maxValue, minValue }) => {
  const [firstDays, setFirstDays] = useState([]);
  const { A2CState, isDQN } = useContext(PriceGraphContext);

  useEffect(() => {
    setFirstDays(getFirstDaysOfMonth(prices));
  }, [prices]);
  return (
    <>
      {prices.map((value, index) => (
        <GraphBar
          value={value.value}
          recommend={value}
          date={value.date}
          key={index}
          maxValue={maxValue}
          minValue={minValue}
          tooltip={
            `${value.date} : ${comma(value.value)}원 ` +
            (isDQN
              ? `\n${
                  value.dqn.recommend === "null"
                    ? "DQN 데이터 없음"
                    : `DQN 추천도 : ${value.dqn.recommend}`
                }`
              : "") +
            (A2CState > 0
              ? `\n${
                  value.a2c.buy === -1
                    ? "A2C 데이터 없음"
                    : `A2C 추천도${
                        A2CState === 2 || A2CState === 3
                          ? `\nBUY:${value.a2c.buy}%`
                          : ""
                      }${
                        A2CState === 1 || A2CState === 3
                          ? `\nSELL:${100 - value.a2c.buy - value.a2c.hold}%`
                          : ""
                      }`
                }`
              : "")
          }
          isFirstDay={firstDays.includes(index)}
        ></GraphBar>
      ))}
    </>
  );
};
export default GraphBars;

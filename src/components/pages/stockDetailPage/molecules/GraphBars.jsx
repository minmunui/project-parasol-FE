import GraphBar from "../atoms/GraphBar";
import { useContext, useEffect, useState } from "react";
import { getFirstDaysOfMonth } from "../../../../utils/calculate";
import { comma } from "../../../../utils/convert";
import { PriceGraphContext } from "../organisms/PriceGraph";

const tooltipText = (value, date, isDQN) => {
  const datePrice = `${date} : ${comma(value.value)}원`;
  let dqnText = "";
  if (isDQN) {
    dqnText =
      value.dqn.recommend === "null"
        ? "\nDQN 데이터 없음"
        : `\nDQN 추천도 : ${value.dqn.recommend}`;
  }
  let a2cText = "";
  if (value.a2c.buy === -1) {
    a2cText = "\nA2C 데이터 없음";
  } else {
    a2cText = "\nA2C 추천도";
    a2cText += `\nBUY:${value.a2c.buy}%`;
    a2cText += `\nHOLD:${value.a2c.hold}%`;
    a2cText += `\nSELL:${100 - value.a2c.buy - value.a2c.hold}%`;
  }
  return datePrice + dqnText + a2cText;
};

const GraphBars = ({ prices, recommends, maxValue, minValue }) => {
  const [firstDays, setFirstDays] = useState([]);
  const { isDQN } = useContext(PriceGraphContext);

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
            tooltipText(value, value.date, isDQN)
          }
          isFirstDay={firstDays.includes(index)}
        ></GraphBar>
      ))}
    </>
  );
};
export default GraphBars;

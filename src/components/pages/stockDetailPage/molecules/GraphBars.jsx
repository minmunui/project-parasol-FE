import GraphBar from "../atoms/GraphBar";
import { useEffect, useState } from "react";
import { getFirstDaysOfMonth } from "../../../../utils/calculate";
import { comma } from "../../../../utils/convert";

const tooltipText = (price, recommend, date) => {
  const datePrice = `${date}\n${comma(price)}원`;
  let dqnText =
    recommend === null ? "\n추천 데이터 없음" : `\nAI추천 : ${recommend}`;
  return datePrice + dqnText;
};

const GraphBars = ({ prices, maxValue, minValue }) => {
  const [firstDays, setFirstDays] = useState([]);
  useEffect(() => {
    setFirstDays(getFirstDaysOfMonth(prices));
  }, [prices]);
  return (
    <>
      {prices.map((value, index) => (
        <GraphBar
          price={value.value}
          recommend={value}
          date={value.date}
          key={index}
          maxValue={maxValue}
          minValue={minValue}
          tooltip={tooltipText(value.value, value.recommend, value.date)}
          isFirstDay={firstDays.includes(index)}
        ></GraphBar>
      ))}
    </>
  );
};
export default GraphBars;

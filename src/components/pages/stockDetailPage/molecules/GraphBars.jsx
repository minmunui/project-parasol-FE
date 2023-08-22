import GraphBar from "../atoms/GraphBar";
import { useEffect, useState } from "react";
import { getFirstDaysOfMonth } from "../../../../utils/calculate";
import {comma} from "../../../../utils/convert";

const GraphBars = ({ prices, maxValue, minValue }) => {
  const [firstDays, setFirstDays] = useState([]);

  useEffect(() => {
    setFirstDays(getFirstDaysOfMonth(prices));
  }, [prices]);
  return (
    <>
      {prices.map((value, index) => (
        <GraphBar
          value={value.value}
          value2={value.recommend}
          date={value.date}
          key={index}
          maxValue={maxValue}
          minValue={minValue}
          tooltip={`${value.date}\n ${comma(value.value)}₩ ${value.buy === -1 ? "추천도 데이터 없음" : `추천도 : ${value.buy}%`}`}
          isFirstDay={firstDays.includes(index)}
        ></GraphBar>
      ))}
    </>
  );
};
export default GraphBars;

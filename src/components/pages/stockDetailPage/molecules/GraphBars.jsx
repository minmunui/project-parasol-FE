import GraphBar from "../atoms/GraphBar";
import { useEffect, useState } from "react";
import { getFirstDaysOfMonth } from "../../../../utils/calculate";

const GraphBars = ({ data, maxValue, minValue }) => {
  const [firstDays, setFirstDays] = useState([]);

  useEffect(() => {
    setFirstDays(getFirstDaysOfMonth(data));
  }, [data]);
  return (
    <>
      {data.map((value, index) => (
        <GraphBar
          value={value.value}
          date={value.date}
          key={index}
          maxValue={maxValue}
          tooltip={`${value.date} ${value.value}₩`}
          isFirstDay={firstDays.includes(index)}
        ></GraphBar>
      ))}
    </>
  );
};
export default GraphBars;

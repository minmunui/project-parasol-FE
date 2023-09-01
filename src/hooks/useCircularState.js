import { useState } from "react";

export const useCircularState = (initialState, maxState) => {
  const [state, setState] = useState(initialState);
  const setCircularState = (newState) => {
    setState((prevState) => {
      const nextState = prevState + newState;
      if (nextState > maxState) {
        return 0;
      }
      if (nextState < 0) {
        return maxState;
      }
      return nextState;
    });
  };

  const next = () => {
    setCircularState(1);
  };

  const prev = () => {
    setCircularState(-1);
  };

  return [state, setCircularState, next, prev];
};

import {useEffect, useState} from "react";

const useWindowWidth = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeListener);
  });

    return innerWidth;
};

export default useWindowWidth;
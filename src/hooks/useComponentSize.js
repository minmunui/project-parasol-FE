import { useEffect, useState } from "react";

const useComponentSize = (refComponent) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const observer = new ResizeObserver((entries, observer) => {
    entries.forEach((entry) => {
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      });
    });
  });

  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    // if (refComponent.current) {
    //   setSize({
    //     width: refComponent.current.offsetWidth,
    //     height: refComponent.current.offsetHeight,
    //   });
      observer.observe(refComponent.current);

  }, [observer, refComponent]);

  return size;
};

export default useComponentSize;

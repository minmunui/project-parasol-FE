import { useEffect, useState } from "react";

const useComponentSize = (refComponent) => {
  const [size, setSize] = useState({ width: 0, height: 0 });
  useEffect(() => {
    if (refComponent.current) {
      setSize({
        width: refComponent.current.offsetWidth,
        height: refComponent.current.offsetHeight,
      });
    }
  }, [refComponent]);
  return size;
};

export default useComponentSize;

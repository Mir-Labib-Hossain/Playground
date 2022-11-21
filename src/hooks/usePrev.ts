import { useEffect, useRef } from "react";

const usePrev = (value: number | string | undefined) => {
  const ref = useRef<number | string | undefined>();
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};

export default usePrev;

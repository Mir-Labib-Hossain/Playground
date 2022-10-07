import { useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  return (
    <div>
      Counter: {count}
      <button onClick={() => setCount((prevState: number) => prevState + 1)}>+</button>
      <button onClick={() => setCount((prevState: number) => prevState - 1)}>-</button>
    </div>
  );
};

export default Counter;

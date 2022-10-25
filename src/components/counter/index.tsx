import { useEffect, useState } from "react";

type Props = {};

const Counter = (props: Props) => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    name: "",
    minor: false,
  });

  useEffect(() => {
    console.count("useEffect rendered");
    console.log("\n");
    document.title = "count: " + count;
  }, [count, obj.name, obj.minor]);

  console.count("Counter rendered");

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={() => setCount((prevState: number) => prevState + 1)}>+</button>
      <button onClick={() => setCount((prevState: number) => prevState - 1)}>-</button>
      <br />
      <br />
      <p>{JSON.stringify(obj)}</p>
      <input type="text" onChange={(e) => setObj({ ...obj, name: e.target.value })} value={obj.name} />
      <button onClick={() => setObj({ ...obj, name: "Labib" })}>Labib</button>
      <button onClick={() => setObj({ ...obj, minor: false })}>False</button>
    </div>
  );
};

export default Counter;

import { useEffect, useState } from "react";
import AnimateNumber from "./pages/animateNumber";

// src = https://www.youtube.com/watch?v=hn3wEsGLr_Q&t=75s&ab_channel=DarinDoria

const App = () => {
  const [randomStatus, setRandomStatus] = useState(false);
  const [value, setValue] = useState(123);

  const getRandom = () => {
    return Math.random() * (100.55 - 120 + 1) + 100.55;
  };

  useEffect(() => {
    if (randomStatus)
      var clear = setInterval(() => {
        setValue(getRandom());
      }, 2000);
    return () => {
      clearTimeout(clear);
    };
  }, [randomStatus]);

  return (
    <div className="app">
      <AnimateNumber value={value} />
      <div className="buttons">
        <button onClick={() => setValue((prev) => prev + 1000)}>+</button>
        <button onClick={() => setValue((prev) => prev - getRandom())}>-</button>
        <button onClick={() => setRandomStatus(!randomStatus)}>Random {randomStatus ? "Off" : "Start"}</button>
      </div>
    </div>
  );
};

export default App;

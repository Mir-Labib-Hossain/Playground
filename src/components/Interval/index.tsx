import { useEffect, useState } from "react";

const Interval = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const subscribe = setInterval(() => {
      // setCounter((currentCounter: number) => currentCounter + 1);
      console.log(counter);
      
      setCounter(counter + 1);
    }, 1000);
    return () => {
      clearInterval(subscribe);
    };
  }, [counter]);

  return <h1>Interval Counter: {counter}</h1>;
};

export default Interval;

// function Interval() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const id = setInterval(() => {
//       setCount(count + 1);
//     }, 1000);
//     return () => {clearInterval(id)}
//   }, []);

//   return <h1>{count}</h1>;
// }
// export default Interval

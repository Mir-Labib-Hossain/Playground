// import { useState } from "react";
// // import Lottie from "react-lottie";
// import Lottie from "react-lottie";
// import * as animationData from "./assets/lottie.json";

// const LottieComponent = () => {
//   const [isStopped, setIsStopped] = useState(false);
//   const [isPaused, setIsPaused] = useState(false);
//   console.log("LottieComponent");

//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationData,
//     rendererSettings: {
//       preserveAspectRatio: "xMidYMid slice",
//     },
//   };

//   return (
//     <div>
//       <Lottie options={defaultOptions} height={400} width={400} isStopped={isStopped} isPaused={isPaused} />
//       <button onClick={() => setIsStopped(true)}>stop</button>
//       <button onClick={() => setIsStopped(false)}>play</button>
//       <button onClick={() => setIsPaused(!isPaused)}>pause</button>
//     </div>
//   );
// };

// export default LottieComponent;

import Lottie from "react-lottie";
import animationData from "./assets/lottie.json";
type Props = {};

const LottieComponent = (props: Props) => {
    const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions}/>;
};

export default LottieComponent;

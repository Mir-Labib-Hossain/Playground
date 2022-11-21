import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import usePrev from "../../hooks/usePrev";
import "./style.css";

type Props = {
  digit: string;
  status: string;
};

function DigitColumn({ digit, status }: Props) {
  const [position, setPosition] = useState(0);
  const [animationStatus, setAnimationStatus] = useState("");
  const columnContainerRef = useRef<any>();
  const prevDigit = usePrev(digit);
  const setColumnToNumber = (number: string) => {
    setPosition(columnContainerRef.current.clientHeight * parseInt(number));
  };

  useEffect(() => {
    setColumnToNumber(digit);
  }, [digit]);

  useEffect(() => {
    setAnimationStatus(prevDigit !== digit ? status : "");
  }, [digit,status]);

  return (
    <div className="ticker-column-container" ref={columnContainerRef}>
      <motion.div animate={{ y: position }} className={`ticker-column ${animationStatus}`}>
        {[9, 8, 7, 6, 5, 4, 3, 2, 1, 0].map((number, index) => (
          <div className="ticker-digit" key={index}>
            <span>{number}</span>
          </div>
        ))}
      </motion.div>
      <span className="number-placeholder">{digit}</span>
    </div>
  );
}

export default DigitColumn;

import DecimalColumn from "../components/decimalColumn";
import DigitColumn from "../components/digitColumn";
import usePrev from "../hooks/usePrev";
import "./style.css";

type Props = {
  value: number;
};

const formatForDisplay = (num: number = 0) => {
  return Math.max(num, 0).toFixed(2).split("").reverse();
};

function AnimateNumber({ value }: Props) {
  const numArr = formatForDisplay(value);
  const prevValue = usePrev(value) 
  
  let status:string = ""
  if(prevValue!==undefined){
    if(value<prevValue) status="decrease"
    else if (value>prevValue) status="increase"
    
  }

  return (
    <div className="ticker-container">
      $
    <div className="ticker-view">
      {numArr.map((num, index) => (num === "." ? 
        <DecimalColumn key={index} /> :
        <DigitColumn key={index} digit={num} status={status} />
       ))}
    </div>
    </div>
  );
}

export default AnimateNumber;

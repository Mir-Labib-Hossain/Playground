import { useRef, useState } from "react";
import CarouselBlock from "./carousel-block";
import Indicator from "./indicator";
import "./style.css";

type Props = {
  dataArr: any[];
};

const Carousel = ({ dataArr }: Props) => {
  const [currentPosition, setCurrentPosition] = useState(0);

  const listRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  const listTotalWidth = listRef.current ? listRef.current.scrollWidth : 1; // must be greater then list-width
  const viewPortWidth = listRef.current ? listRef.current.offsetWidth : 0;
  const lastView = listTotalWidth - viewPortWidth;

  // const handleOnScroll = useThrottle(() => {
  //   setCurrentPosition(containerRef.current.scrollLeft);
  // }, 3000);

  const handleOnScroll = () => {
    setCurrentPosition(containerRef.current.scrollLeft);
  };

  const scrolToLeft = () => {
    containerRef.current.scrollLeft = 0;
  };

  const scrolToRight = () => {
    containerRef.current.scrollLeft = listTotalWidth - viewPortWidth;
  };

  let leftBtn: any;
  let rightBtn: any;
  if (listTotalWidth > viewPortWidth) {
    currentPosition !== 0 &&
      (leftBtn = (
        <button className="handler-btn left-btn" onClick={scrolToLeft}>
          &#10096;
        </button>
      ));

    currentPosition !== lastView &&
      (rightBtn = (
        <button className="handler-btn right-btn" onClick={scrolToRight}>
          &#10097;
        </button>
      ));
  }

  return (
    <div className="container">
      <div className="carousel-header">
        <h1>Learn</h1>
        <Indicator position={(100 * currentPosition) / (listTotalWidth - viewPortWidth)} />
      </div>
      <div className="carousel-body">
        {leftBtn}
        {rightBtn}
        <div className="carousel-list-container" ref={containerRef} onScroll={() => handleOnScroll()}>
          <div className="carousel-list" ref={listRef}>
            {dataArr.map((data) => (
              <CarouselBlock key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

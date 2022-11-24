import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import CarouselBlock from "./carousel-block";
import Pagination from "./pagination";
import "./style.css";

type Props = {
  dataArr: any[];
};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Carousel = ({ dataArr }: Props) => {
  const [currentView, setCurrentView] = useState(0);
  const [limit, setLimit] = useState(5); // width = 20%

  const updateLimit = () => {
    const { width } = getWindowDimensions();
    if (width < 850) setLimit(2); // width = 50%
    else if (width < 1100) setLimit(3); // width = 33%
    else if (width < 1570) setLimit(4); // width = 25%
    else setLimit(5);
    setCurrentView(0)
  };

  const debounceLimit = useDebounce(() => updateLimit(), 500);

  useEffect(() => {
    updateLimit(); // update on load
    const handleResize = () => debounceLimit();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleView = (status: string) => {
    const lastSlider = Math.ceil(dataArr.length / limit) - 1;
    if (status === "left") {
      if (currentView === 0) {
        setCurrentView(lastSlider);
      } else {
        setCurrentView((prevState) => prevState - 1);
      }
    } else {
      if (currentView === lastSlider) {
        setCurrentView(0);
      } else {
        setCurrentView((prevState) => prevState + 1);
      }
    }
  };

  return (
    <div className="container">
      <div className="carousel-header">
        <h1>Learn</h1>
        <Pagination total={dataArr.length / limit} activeIndex={currentView} />
      </div>
      <div className="carousel-body">
        {limit < dataArr.length && (
          <button className="handler-btn" onClick={() => handleView("left")}>
            &#10096;
          </button>
        )}
        <div className="carousel-list" style={{ transform: `translateX(calc(${currentView}*-100%))` }}>
          {dataArr.map((data) => (
            <CarouselBlock key={data.id} data={data} limit={limit} />
          ))}
        </div>
        {limit < dataArr.length && (
          <button className="handler-btn" onClick={() => handleView("right")}>
            &#10097;
          </button>
        )}
      </div>
    </div>
  );
};

export default Carousel;

import { useEffect, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import CarouselBlock from "../carousel-block";
import HandlerBtn from "./handler-btn";
import "./style.css";
type Props = {};

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};

const Carousel = (props: Props) => {
  const [currentView, setCurrentView] = useState(0);
  const [limit, setLimit] = useState(5); // = 20% width
  const carouselArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const updateLimit = () => {
    const { width } = getWindowDimensions();
    if (width < 850) setLimit(2); // = 50% width
    else if (width < 1100) setLimit(3); // = 33% width
    else if (width < 1570) setLimit(4); // = 25% width
    else setLimit(5);
  };

  const debounceLimit = useDebounce(() => updateLimit(), 500);

  useEffect(() => {
    updateLimit(); // update on load
    const handleResize = () => debounceLimit();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleView = (status: string) => {
    if (status === "left") {
      if (currentView === 0) setCurrentView((prevState) => prevState - 1);
      setCurrentView((prevState) => prevState - 1);
    } else setCurrentView((prevState) => prevState + 1);
  };

  return (
    <div className="container">
      <HandlerBtn position="left" handleView={handleView} />
      <div className="carousel-list" style={{ transform: `translateX(calc(${currentView}*-100%))` }}>
        {carouselArr.map((title) => (
          <CarouselBlock key={title} title={title} limit={limit} />
        ))}
      </div>
      <HandlerBtn position="right" handleView={handleView} />
    </div>
  );
};

export default Carousel;

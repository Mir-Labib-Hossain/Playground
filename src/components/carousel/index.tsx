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
  const [limit, setLimit] = useState(5); // width = 20%
  const carouselArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  const updateLimit = () => {
    const { width } = getWindowDimensions();
    if (width < 850) setLimit(2); // width = 50%
    else if (width < 1100) setLimit(3); // width = 33%
    else if (width < 1570) setLimit(4); // width = 25%
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
    const lastSlider = carouselArr.length / limit - 1;
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
      <HandlerBtn handleView={() => handleView("left")}>&#10096;</HandlerBtn>
      <div className="carousel-list" style={{ transform: `translateX(calc(${currentView}*-100%))` }}>
        {carouselArr.map((title) => (
          <CarouselBlock key={title} title={title} limit={limit} />
        ))}
      </div>
      <HandlerBtn handleView={() => handleView("right")}>&#10097;</HandlerBtn>
    </div>
  );
};

export default Carousel;

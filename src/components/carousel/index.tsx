import { useState } from "react";
import CarouselBlock from "../carousel-block";
import HandlerBtn from "./handler-btn";
import "./style.css";
type Props = {};

const Carousel = (props: Props) => {
  const [currentView, setCurrentView] = useState(0);
  const carouselArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const limit = 4;

  const handleView = (status: string) => {
    if (status === "left") setCurrentView((prevState) => prevState - 1);
    else setCurrentView((prevState) => prevState + 1);
  };
  
  console.log(currentView !== 0, currentView, 0);
  console.log(currentView !== Math.floor(carouselArr.length / limit), currentView, Math.floor(carouselArr.length / limit));

  return (
    <div className="container">
      <HandlerBtn position="left" handleView={handleView} disabled={currentView === 0} />
      <div className="carousel-list" style={{ transform: `translateX(calc(${currentView}*-100%))` }}>
        {carouselArr.map((title) => (
          <CarouselBlock key={title} title={title} />
        ))}
      </div>
      <HandlerBtn position="right" handleView={handleView} disabled={currentView === Math.floor(carouselArr.length / limit)} />
    </div>
  );
};

export default Carousel;

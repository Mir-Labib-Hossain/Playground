import CarouselBlock from "../carousel-block";
import HandlerBtn from "./handler-btn";
import "./style.css";
type Props = {};

const Carousel = (props: Props) => {
  return (
    <div className="container">
      <HandlerBtn position="left" />
      <div className="carousel-list">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((title) => (
          <CarouselBlock key={title} title={title} />
        ))}
      </div>
      <HandlerBtn position="right" />
    </div>
  );
};

export default Carousel;

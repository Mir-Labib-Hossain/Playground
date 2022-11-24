import "./style.css";

type Props = {
  title: number | string;
};

const CarouselBlock = ({ title }: Props) => {
  return (
    <div className="block">
      <div className="content">CarouselBlock {title}</div>
    </div>
  );
};

export default CarouselBlock;

import "./style.css";

type Props = {
  title: number | string;
};

const CarouselBlock = ({ title }: Props) => {
  return <div className="block">CarouselBlock {title}</div>;
};

export default CarouselBlock;

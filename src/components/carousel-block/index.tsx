import "./style.css";

type Props = {
  title: number | string;
  limit: number;
};

const CarouselBlock = ({ title, limit }: Props) => {
  const width = 100 / limit + "%";

  return (
    <div className="block" style={{ flexBasis: width }}>
      <div className="content">CarouselBlock {title}</div>
    </div>
  );
};

export default CarouselBlock;

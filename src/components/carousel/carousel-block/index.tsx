import "./style.css";

type Props = {
  data: { id: number; text: number | string; bgColor: string; image: string };
};

const CarouselBlock = ({ data }: Props) => {
  const { id, text, bgColor, image } = data;

  return (
    <div className="block">
      <div className="content" style={{ backgroundColor: bgColor }}>
        <div className="left">
          <h1>&#10004;</h1>
          {id} - {text}
        </div>
        <div className="right" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
  );
};

export default CarouselBlock;

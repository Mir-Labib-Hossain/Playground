import "./style.css";
import farmer from "../../../assets/Farmer-bro.svg";
type Props = {
  limit: number;
  data: { text: number | string; bgColor: string; image:string };
};

const CarouselBlock = ({ data, limit }: Props) => {
  const { text, bgColor,image } = data;
  const width = 100 / limit + "%";

  return (
    <div className="block" style={{ flexBasis: width }}>
      <div className="content" style={{ backgroundColor: bgColor }}>
        <div className="left" >
          <h1>&#10004;</h1>
          {text}
        </div>
        <div className="right" style={{ backgroundImage: `url(${image})` }}></div>
      </div>
    </div>
  );
};

export default CarouselBlock;

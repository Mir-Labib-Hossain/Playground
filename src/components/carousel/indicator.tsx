type Props = {
  position: number;
};

function Indicator({ position }: Props) {  
  return (
    <div className="indicator-container">
      <div className="indicator" style={{ marginLeft: `calc(${position||0}% - 20px)` }}></div>
    </div>
  );
}

export default Indicator;

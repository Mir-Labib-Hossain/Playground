type Props = {
  position: String;
};
// import "./style.css";


function HandlerBtn({ position }: Props) {
  return <button className="handler-btn">{position === "left" ? "<" : ">"}</button>;
}

export default HandlerBtn;

type Props = {
  position: String;
  handleView: any;
  disabled: boolean;
};
// import "./style.css";

function HandlerBtn({ position, handleView, disabled }: Props) {
  return (
    <button className="handler-btn" onClick={() => handleView(position)} disabled={disabled}>
      {position === "left" ? "<" : ">"}
    </button>
  );
}

export default HandlerBtn;

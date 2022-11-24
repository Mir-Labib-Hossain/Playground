type Props = {
  position: String;
  handleView: any;
};

function HandlerBtn({ position, handleView }: Props) {
  return (
    <button className="handler-btn" onClick={() => handleView(position)}>
      {position === "left" ? "<" : ">"}
    </button>
  );
}

export default HandlerBtn;

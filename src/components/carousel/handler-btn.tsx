type Props = {
  children: React.ReactNode;
   handleView: any;
};

function HandlerBtn({ children, handleView }: Props) {
  return (
    <button className="handler-btn" onClick={handleView}>
      {children}
    </button>
  );
}

export default HandlerBtn;

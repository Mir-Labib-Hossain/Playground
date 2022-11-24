type Props = {
  total: number;
  activeIndex: number;
};

function Pagination({ total, activeIndex }: Props) {
  console.log(total, activeIndex);
  let paginations: any = [];
  for (let i = 0; i < total; i++) {
    paginations.push(<div key={i} className={i === activeIndex ? "pagination-active" : "pagination"}></div>);
  }
  return <div className="pagination-container">{paginations}</div>;
}

export default Pagination;

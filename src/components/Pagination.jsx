function Pagination() {
  return (
    <div className="pagination">
      <span className="amout_of_items">
        <span className="current_items">5-8</span> of{' '}
        <span className="all_items">249</span>
      </span>
      <div className="pagination__wrapper">
        <button className="button pagination__button pagination__button--left"></button>
        <div className="page">1</div>
        <div className="page page--current">2</div>
        <div className="page">3</div>
        <div className="page number_button">...</div>
        <div className="page">10</div>
        <button className="button pagination__button pagination__button--right"></button>
      </div>
    </div>
  );
}

export default Pagination;

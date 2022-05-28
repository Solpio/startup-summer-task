function createPageBlocks(page, maxPages, onClickPage) {
  if (maxPages === 1) {
    return <div className="page page--current">{page}</div>;
  }
  let buttons;
  if (page > 2 && page < maxPages - 1) {
    buttons = (
      <>
        <div className="page" onClick={() => onClickPage(1)}>{1}</div>
        <div className="page number_button">...</div>
        <div className="page">{page - 1}</div>
        <div className="page page--current">{page}</div>
        <div className="page">{page + 1}</div>
        <div className="page number_button">...</div>
        <div className="page" onClick={() => onClickPage(maxPages)}>
          {maxPages}
        </div>
      </>
    );
  } else {
    if (page !== 2) {
      buttons = (
        <>
          <div className="page" onClick={() => onClickPage(1)}>{1}</div>
          <div className="page number_button">...</div>
          <div className="page">{page - 1}</div>
          <div className="page page--current">{page}</div>
          <div className="page" onClick={() => onClickPage(maxPages)}>
          {maxPages}
        </div>
        </>
      );
    } else {
      return (
        <>
        <div className="page" onClick={() => onClickPage(1)}>{1}</div>
          <div className="page page--current">{page}</div>
          <div className="page">{page + 1}</div>
          <div className="page number_button">...</div>
          <div className="page" onClick={() => onClickPage(maxPages)}>
            {maxPages}
          </div>
        </>
      );
    }
  }
  if (page === 1) {
    buttons = (
      <>
        <div className="page page--current">{page}</div>
        <div className="page">{page + 1}</div>
        <div className="page number_button">...</div>
        <div className="page" onClick={() => onClickPage(maxPages)}>
          {maxPages}
        </div>
      </>
    );
  }
  if (page === maxPages) {
    buttons = (
      <>
        <div className="page"onClick={() => onClickPage(1)}>{1}</div>
        <div className="page number_button">...</div>
        <div className="page">{page === 1 ? 1 : page - 1}</div>
        <div className="page page--current">{page}</div>
      </>
    );
  }

  return buttons;
}

function Pagination({ page, onClickPage, maxPages, maxRepos }) {
  return (
    <div className="pagination">
      <span className="amout_of_items">
        <span className="current_items">{`${(page - 1) * 4 + 1}-${
          page === maxPages ? maxRepos : page * 4
        }`}</span>{' '}
        of {maxRepos}
      </span>
      <div className="pagination__wrapper">
        <button
          className="button pagination__button pagination__button--left"
          onClick={() => onClickPage(page > 1 ? page - 1 : 1)}
        ></button>
        {createPageBlocks(page, maxPages, onClickPage)}
        <button
          className="button pagination__button pagination__button--right"
          onClick={() => onClickPage(page === maxPages ? maxPages : page + 1)}
        ></button>
      </div>
    </div>
  );
}

export default Pagination;

import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import RepoItem from '../RepoItem';
import styles from './RepoTable.module.scss';

function RepoTable({ itemsPerPage, items }) {
  console.log(items)
  function Items({ currentItems }) {
    return (
      <>
        {currentItems &&
          currentItems.map((item) => (
            <RepoItem key={item.id} name={item.name} url={item.html_url} description={item.description}/>
          ))}
      </>
    );
  }
  console.log(itemsPerPage)

  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);

  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {

    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <ul className="repositories__table">
      <Items currentItems={currentItems} />
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </ul>
  );
}

export default RepoTable
function Pagination({ currentPage, totalPages, goToPage }) {
  const renderPaginationButtons = () => {
    const visiblePageCount = 7;
    const pageRange = Math.min(visiblePageCount, totalPages);
    const startPage = Math.max(1, currentPage - Math.floor(pageRange / 2));
    const endPage = Math.min(startPage + pageRange - 1, totalPages);
    let buttons = [];
    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <li key={page}>
          <button className={`pagination__item ${currentPage === page ? 'pagination__item_active' : ''}`} onClick={() => goToPage(page)}>
            {page}
          </button>
        </li>,
      );
    }
    return buttons;
  };

  return (
    <ul className='pagination'>
      <li style={{ visibility: currentPage > 1 ? 'visible' : 'hidden' }}>
        <button className='pagination__item' onClick={() => goToPage(currentPage - 1)}>
          Назад
        </button>
      </li>
      {renderPaginationButtons()}
      <li style={{ visibility: currentPage !== totalPages ? 'visible' : 'hidden' }}>
        <button className='pagination__item' onClick={() => goToPage(currentPage + 1)}>
          Вперед
        </button>
      </li>
    </ul>
  );
}

export default Pagination;

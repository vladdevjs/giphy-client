import { useEffect } from 'react';

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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <ul className='pagination'>
      <li>
        <button className={`pagination__item ${currentPage <= 1 ? 'pagination__item_disabled' : ''}`} disabled={currentPage <= 1} onClick={() => goToPage(currentPage - 1)}>
          Назад
        </button>
      </li>
      {renderPaginationButtons()}
      <li>
        <button className={`pagination__item ${currentPage === totalPages ? 'pagination__item_disabled' : ''}`} disabled={currentPage !== totalPages} onClick={() => goToPage(currentPage + 1)}>
          Вперед
        </button>
      </li>
    </ul>
  );
}

export default Pagination;

import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import CardList from './CardList';
import Pagination from './Pagination';

function Trending() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchTrendingGifs(currentPage);
  }, [currentPage]);

  const fetchTrendingGifs = (page) => {
    const limit = 9;
    const offset = (page - 1) * limit;

    api
      .getTrending(limit, offset)
      .then((data) => {
        setCards(data.data);
        const totalCount = data.pagination.total_count;
        setTotalPages(Math.ceil(totalCount / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
      <div>
        <CardList cards={cards} />
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />}
      </div>
    </>
  );
}

export default Trending;

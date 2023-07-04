import React, { useEffect, useState } from 'react';
import api from '../utils/api';
import CardList from './CardList';
import Pagination from './Pagination';
import { mergeFavoritesIntoCards } from '../helpers/mergeFavoritesIntoCards';

function Trending({ setCards, cards, openPopup }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    fetchTrendingGifs(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, localStorage.getItem('favorites')]);

  const fetchTrendingGifs = (page) => {
    const limit = 9;
    const offset = (page - 1) * limit;

    api
      .getTrending(limit, offset)
      .then((data) => {
        const trendingCardsData = data.data;
        const updatedCards = mergeFavoritesIntoCards(trendingCardsData);
        setCards(updatedCards);
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
        <CardList cards={cards} openPopup={openPopup} />
        {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />}
      </div>
    </>
  );
}

export default Trending;

import React, { useState, useRef } from 'react';
import api from '../utils/api';
import CardList from './CardList';
import SearchField from './SearchField';
import Pagination from './Pagination';

function Main() {
  const [cards, setCards] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const searchInputRef = useRef(null);
  const [searchError, setSearchError] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      setCurrentPage(1);
      if (searchInputRef.current.validity.valid) {
        fetchSearchGifs(currentPage);
      } else {
        const error = searchInputRef.current.validationMessage;
        console.log(error);
        setSearchError(error);
      }
    }
  };

  const fetchSearchGifs = (page) => {
    const limit = 9;
    const offset = (page - 1) * limit;
    api
      .searchImages(searchQuery, limit, offset)
      .then((data) => {
        setCards(data.data);
        setNoResults(data.data.length === 0);
        const totalCount = data.pagination.total_count;
        setTotalPages(Math.ceil(totalCount / limit));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchError('');
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
    setSearchError('');
  };

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      fetchSearchGifs(page);
    }
  };

  return (
    <>
      <SearchField
        handleSearch={handleSearch}
        handleClear={handleClear}
        handleChange={handleChange}
        searchQuery={searchQuery}
        searchInputRef={searchInputRef}
        error={searchError}
      />
      {noResults ? (
        <p className='search__message'>Ничего не найдено. Не отчаиваемся 😉</p>
      ) : (
        <>
          <CardList cards={cards} />
          {totalPages > 1 && <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />}
        </>
      )}
    </>
  );
}

export default Main;

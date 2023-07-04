import React, { useEffect, useState } from 'react';
import CardList from './CardList';

function Favourites({ openPopup }) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setCards(favorites);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('favorites')]);

  return (
    <>
      <div>
        <CardList cards={cards} openPopup={openPopup} />
        {cards.length === 0 ? <p className='search__message'>Ничего не добавлено. Не отчаиваемся 😉</p> : ''}
      </div>
    </>
  );
}

export default Favourites;

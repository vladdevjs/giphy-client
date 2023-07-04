import React, { useEffect, useState } from 'react';
import { mergeFavoriteIntoCard } from '../helpers/mergeFavoritesIntoCards';

import api from '../utils/api';
import CardLarge from './CardLarge';

function Random({ trigger, openPopup }) {
  const [card, setCard] = useState({});

  useEffect(() => {
    api
      .getRandom()
      .then((data) => {
        setCard(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [trigger]);

  useEffect(() => {
    if (Object.keys(card).length > 0) {
      const updatedCard = mergeFavoriteIntoCard(card);
      setCard(updatedCard);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localStorage.getItem('favorites')]);

  return (
    <>
      <main className='single-card'>
        {Object.keys(card).length > 0 ? <CardLarge card={card} openPopup={() => openPopup(card)} /> : null}
      </main>
    </>
  );
}

export default Random;

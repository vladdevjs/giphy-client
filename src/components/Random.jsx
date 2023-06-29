import React, { useEffect, useState } from 'react';

import api from '../utils/api';
import CardLarge from './CardLarge';

function Random({ trigger }) {
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

  return (
    <>
      <main className='single-card'>{Object.keys(card).length > 0 ? <CardLarge card={card} /> : null}</main>
    </>
  );
}

export default Random;

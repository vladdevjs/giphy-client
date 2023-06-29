import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

function CardLarge({ card }) {
  const [isLoading, setIsLoading] = useState(true);

  const onLoading = () => {
    setIsLoading(false);
  };
  return (
    <div key={card.id} className='card card_large'>
      {isLoading ? (
        <span className='card__spinner'>
          <ClipLoader color='#9acd32' size={30} />
        </span>
      ) : null}
      <img src={card.images.original.url} alt='Card' className={`card__largeImage ${isLoading ? 'card__largeImage_hidden' : ''}`} onLoad={onLoading} />
    </div>
  );
}

export default CardLarge;

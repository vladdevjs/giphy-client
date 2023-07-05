import React, { useState, useCallback } from 'react';
import { ClipLoader } from 'react-spinners';

function Card({ card, openPopup }) {
  const [isLoading, setIsLoading] = useState(true);

  const onLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return (
    <div className='card'>
      {isLoading ? (
        <span className='card__spinner'>
          <ClipLoader color='#9acd32' size={30} />
        </span>
      ) : null}
      <img
        src={card.images.original.url}
        alt='Card'
        className={`card__image ${isLoading ? 'card__image_hidden' : ''}`}
        onLoad={onLoading}
        onClick={() => openPopup(card)}
      />
    </div>
  );
}

export default Card;

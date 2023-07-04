import React, { useState } from 'react';

function Popup({ isOpen, card, onClose, setCard }) {
  const [isCopied, setIsCopied] = useState(false);

  const copyImageLink = () => {
    if (card) {
      navigator.clipboard.writeText(`${card.images.original.url}`);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1000);
    }
  };

  const addToFavorites = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    const existingIndex = favorites.findIndex((fav) => fav.id === card.id);

    if (existingIndex !== -1) {
      // Card already exists in favorites, remove it
      favorites.splice(existingIndex, 1);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setCard((prevCard) => ({
        ...prevCard,
        isFavorite: false,
      }));
    } else {
      // Card doesn't exist in favorites, add it
      const updatedCard = { ...card, isFavorite: true };
      favorites.push(updatedCard);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      setCard(updatedCard);
    }
  };

  return (
    <div className={`popup ${isOpen ? 'popup_opened' : ''}`}>
      <div className='popup__container'>
        <img
          src={`${card ? card.images.original.url : ''}`}
          alt={`${card ? card.title : ''}`}
          className='popup__image'
        />

        <h3 className='popup__image-title'>{`${card ? card.title : ''}`}</h3>

        <button
          type='button'
          className={`popup__copy-button ${isCopied ? 'popup__copy-button_copied' : ''}`}
          onClick={copyImageLink}
        >
          {isCopied ? 'Скопировано' : 'Скопировать'}
        </button>
        <button
          type='button'
          className={`popup__favourite-button ${card && card.isFavorite ? 'popup__favourite-button_full' : ''}`}
          onClick={addToFavorites}
        >
          {card && card.isFavorite ? 'Удалить' : 'Сохранить'}
        </button>

        <button type='button' className='popup__close' aria-label='Закрыть окно' onClick={onClose}></button>
      </div>
    </div>
  );
}

export default Popup;

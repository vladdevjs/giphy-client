const mergeFavoritesIntoCards = (cards) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  return cards.map((card) => ({
    ...card,
    isFavorite: favorites.some((fav) => fav.id === card.id),
  }));
};

const mergeFavoriteIntoCard = (card) => {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  const isFavorite = favorites.some((fav) => fav.id === card.id);

  return {
    ...card,
    isFavorite: isFavorite,
  };
};

export { mergeFavoritesIntoCards, mergeFavoriteIntoCard };

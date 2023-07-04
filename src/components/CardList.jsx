import Card from './Card';

function CardList({ cards, openPopup }) {
  return (
    <main className='card-list'>
      {cards.map((card, index) => (
        <Card key={`${card.id}-${index}`} card={card} openPopup={openPopup} />
      ))}
    </main>
  );
}

export default CardList;

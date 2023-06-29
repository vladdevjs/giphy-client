import Card from './Card';

function CardList({ cards }) {
  return (
    <main className='card-list'>
      {cards.map((card, index) => (
        <Card key={`${card.id}-${index}`} card={card} />
      ))}
    </main>
  );
}

export default CardList;

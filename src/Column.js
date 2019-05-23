import React from 'react';

export default function Column({
  color,
  name,
  cards,
  handleMoveLeft,
  handleMoveRight,
  handleAdd,
  first,
  last
}) {
  return (
    <div className="column">
      <h2 style={{ background: color }}>{name}</h2>
      <ul>
        {cards.map((card, i) => (
          <li key={i}>
            {!first && <button onClick={handleMoveLeft(i)}>&lt;</button>} {card}{' '}
            {!last && <button onClick={handleMoveRight(i)}>&gt;</button>}
          </li>
        ))}
        <li>
          <button onClick={handleAdd}>+ Add a card</button>
        </li>
      </ul>
    </div>
  );
}

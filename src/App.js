import React, { useState, useEffect } from 'react';
import Column from './Column';

const _columns = [
  {
    name: 'Winnie',
    color: '#8e6e95',
    cards: ['Example 1', 'Example 2']
  },
  {
    name: 'Bob',
    color: '#39a59c',
    cards: ['Example 1', 'Example 2']
  },
  {
    name: 'Thomas',
    color: '#344759',
    cards: ['Example 1', 'Example 2']
  },
  {
    name: 'George',
    color: '#e8741e',
    cards: ['Example 1', 'Example 2']
  }
];

export default function App() {
  const [columns, setColumns] = useState(_columns);

  useEffect(() => {
    const columnsFromLS = localStorage.getItem('appState');
    columnsFromLS && setColumns(JSON.parse(columnsFromLS));
  }, []);
  useEffect(() => {
    localStorage.setItem('appState', JSON.stringify(columns));
  });

  const handleAddCard = columnIndex => _event => {
    const text = window.prompt('What do you want to add?');

    setColumns(
      columns.map(
        (column, i) =>
          i === columnIndex
            ? {
                ...column,
                cards: [...column.cards, ...(text !== null ? [text] : [])]
              }
            : column
      )
    );
  };

  const handleMove = originColumnIndex => targetColumnIndex => cardIndex => _event => {
    setColumns(
      columns.map((column, i) => ({
        ...column,
        cards:
          i === originColumnIndex
            ? column.cards.filter((_, j) => j !== cardIndex)
            : i === targetColumnIndex
              ? [...column.cards, columns[originColumnIndex].cards[cardIndex]]
              : column.cards
      }))
    );
  };

  return (
    <div className="container">
      {columns.map((column, i) => (
        <Column
          key={i}
          handleAdd={handleAddCard(i)}
          handleMoveLeft={handleMove(i)(i - 1)}
          handleMoveRight={handleMove(i)(i + 1)}
          first={i === 0}
          last={i === columns.length - 1}
          {...column}
        />
      ))}
    </div>
  );
}

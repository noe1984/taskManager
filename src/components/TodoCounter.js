import React from 'react';
import './styles/TodoCounter.css';

function TodoCounter({completed, total}) {
  return (
    <h2 className="TodoCounter">Has completado {completed} de {total} TODOs</h2>
  );
}

export { TodoCounter };

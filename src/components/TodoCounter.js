import React from 'react';
import './styles/TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}) {
  return (
      <h3 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} tareas!!
      </h3>
  );
}

export { TodoCounter };    

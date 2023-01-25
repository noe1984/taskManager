import React from 'react';
import './styles/TodoCounter.css';

function TodoCounter({completedTodos, totalTodos, loading}) {
  return (
    <React.Fragment>
      <h2 className={`TodoCounter ${loading && "TodoCounter--loading"}`}>
        Has completado {completedTodos} de {totalTodos} tareas!!
      </h2>
    </React.Fragment>
  );
}

export { TodoCounter };  

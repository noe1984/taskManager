import React from 'react';
import './styles/TodoCounter.css';

function TodoCounter({completedTodos, totalTodos}) {
  return (
    <React.Fragment>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} tareas!!</h2>
    </React.Fragment>
  );
}

export { TodoCounter };  

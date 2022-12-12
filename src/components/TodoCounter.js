import React from 'react';
import './styles/TodoCounter.css';
import { TodoContext } from './TodoContext'

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext)
  return (
    <React.Fragment>
      <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    </React.Fragment>
  );
}

export { TodoCounter };  

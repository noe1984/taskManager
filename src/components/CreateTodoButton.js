import React from 'react';
import './styles/CreateTodoButton.css'; 
import { TodoContext } from './TodoContext';

function CreateTodoButton() { 
  const {setOpenModal} = React.useContext(TodoContext)
  
  const toggleOpenModal = () => {
    setOpenModal(prevState => !prevState)
  } 

  return (
    <div className='CreateTodoButton-container'>
      <h3>
        Añade una nueva tarea
      </h3>
      <button 
        className="CreateTodoButton" 
        onClick={toggleOpenModal}
      >
        +
    </button>
    </div>
  );
}

export { CreateTodoButton }; 

import React from 'react';
import './styles/CreateTodoButton.css'; 
import { TodoContext } from './TodoContext';

function CreateTodoButton() { 
  const {setOpenModal} = React.useContext(TodoContext)
  
  const toggleOpenModal = () => {
    setOpenModal(prevState => !prevState)
  } 

  return (
    <button 
      className="CreateTodoButton" 
      onClick={toggleOpenModal}
    >
      +
    </button>
  );
}

export { CreateTodoButton }; 

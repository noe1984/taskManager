import React from 'react';
import './styles/CreateTodoButton.css'; 

function CreateTodoButton({setOpenModal}) { 
  
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

import React from 'react';
import './styles/CreateTodoButton.css'; 
import { useNavigate } from 'react-router';

function CreateTodoButton() { 
  const navigate = useNavigate()

  return (
    <div className='CreateTodoButton-container'>
      <h3>
        Añade una nueva tarea
      </h3>
      <button 
        className="CreateTodoButton" 
        onClick={() => navigate('/new')}
      >
        +
    </button>
    </div>
  );
}

export { CreateTodoButton }; 

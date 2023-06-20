import React from 'react';
import './styles/CreateTodoButton.css'; 
import { useNavigate } from 'react-router';

function CreateTodoButton({loading}) { 
  const navigate = useNavigate() 
  

  return ( 
    <div className={`CreateTodoButton-container ${loading && 'CreateTodoButton-container--loading'}`}>
      <h3>
        Añade una nueva tarea
      </h3>
      <button 
        className="CreateTodoButton" 
        onClick={() => navigate('/new')}
        disabled={loading}
      >
        +
      </button>
    </div>
  );
}

export { CreateTodoButton }; 

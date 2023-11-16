import React from 'react';
import './styles/CreateTodoButton.css'; 
import { useNavigate } from 'react-router';
import addButton from "../assets/addButton.svg";

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
        <img src={addButton}/>
      </button> 
    </div>
  );
}

export { CreateTodoButton }; 

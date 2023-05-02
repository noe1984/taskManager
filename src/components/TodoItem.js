import React from 'react';
import './styles/TodoItem.css';  
import {CompleteIcon,EditIcon,RemoveIcon} from './TodoIcons'

function TodoItem(props) {
   
  return (
    <li className="TodoItem">
      <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
      
      <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
        {props.text}
      </p>
      <EditIcon onRemove={props.onEdit} />
      <RemoveIcon onRemove={props.onRemove} />
    </li>
  );
}

export { TodoItem }; 

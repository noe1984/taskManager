import React from 'react';
import './styles/TodoItem.css';   
import { CompleteIcon, EditIcon, RemoveIcon } from './TodoIcons'

function TodoItem(props) {
   
  return (
    <li className="TodoItem"> 

        <div className='TodoItem-complete_icon'>
          <CompleteIcon completed={props.completed} onComplete={props.onComplete} />
        </div> 

        <div className='TodoItem-text'>
          <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
            {props.text}
          </p>
        </div> 

        <div className='TodoItem-remove_edit'>
          <EditIcon onEdit={props.onEdit} />
          <RemoveIcon onRemove={props.onRemove} />  
        </div> 

    </li> 
  ); 
}

export { TodoItem }; 

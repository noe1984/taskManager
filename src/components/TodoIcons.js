import React from 'react'
import './styles/TodoIcon.css'
import { RiDeleteBinFill as Delete } from 'react-icons/ri';
import { BsCheckCircle as Check } from 'react-icons/bs';

const iconTypes = {
    "check": color => (
        <Check className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <Delete className="Icon-svg Icon-svg--delete" fill={color}/>
    )
}

function TodoIcon({type, color, onClick}) {
    return (
        <span className={`Icon-container Icon-container--${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

function CompleteIcon({completed, onComplete}) {
    return (
        <TodoIcon 
            type={'check'}
            color={completed? 'gray' : 'green'} 
            onClick={onComplete} 
        />
    )
}

function RemoveIcon({onRemove}) {
    return (
        <TodoIcon 
            type={'delete'}
            onClick={onRemove} 
        />
    )
}

export {CompleteIcon, RemoveIcon}


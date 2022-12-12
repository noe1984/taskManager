import React from 'react'
import './styles/TodoIcons.css'
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
            color={completed? 'gray' : '#4CAF50'} 
            onClick={onComplete} 
        />
    )
}

function RemoveIcon({onRemove}) {
    return (
        <TodoIcon 
            type={'delete'}
            color={'#EC407A'}
            onClick={onRemove} 
        />
    )
}

export {CompleteIcon, RemoveIcon}


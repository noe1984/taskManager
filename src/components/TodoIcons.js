import React from 'react'  

import './styles/TodoIcons.css'
import { RiDeleteBinFill as Delete } from 'react-icons/ri';
import { BsCheckCircle as Check } from 'react-icons/bs';
import { FaEdit as Edit } from 'react-icons/fa';

const iconTypes = { 
    "check": color => (
        <Check className="Icon-svg Icon-svg--check" fill={color} />
    ),
    "delete": color => (
        <Delete className="Icon-svg Icon-svg--delete" fill={color}/>
    ),
    "edit": color => (
        <Edit className="Icon-svg Icon-svg--edit" fill={color} />
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
            color={completed? '#212F3C' : '#CCFF33'} 
            onClick={onComplete} 
        /> 
    )
}

function RemoveIcon({onRemove}) {
    return (
        <TodoIcon 
            type={'delete'}
            color={'#A93226'}
            onClick={onRemove}    
        />
    )
}

function EditIcon({onEdit}) {
    return (
        <TodoIcon 
            type={'edit'}
            color={'#515A5A'}
            onClick={onEdit} 
        />
    )
}

export {CompleteIcon, RemoveIcon, EditIcon}


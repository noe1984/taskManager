import React from 'react'
import { useNavigate, useParams } from 'react-router';
import { useTodos } from '../hooks/useTodos';
import './styles/RemovePage.css'

function RemovePage() {
    const {stateModifiers} = useTodos()
    
    const {removeTodos} = stateModifiers

    const params = useParams()
    const id = Number(params.id)
console.log(id)
    const navigate = useNavigate()  
    const onCancel = () => {
        navigate(-1)
    }

    const deleteTodo = () => {  
        removeTodos(id)
        navigate('/')
    }

    return (
        <div className='Remove'>
            <h2>Estas seguro?</h2>
            <div className='Remove-container'>
                <button onClick={onCancel} className='Remove-container--cancel'>
                    Cancelar
                </button>

                <button onClick={deleteTodo} className='Remove-container--delete'>
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export { RemovePage }
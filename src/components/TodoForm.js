import React from 'react' 
import './styles/TodoForm.css'
import { useTodos } from '../hooks/useTodos'
import { useLocation, useNavigate } from 'react-router'

function TodoForm(props) {
    const [todoValue, setTodoValue] = React.useState('' || props.textToEdit)
    const navigate = useNavigate()

    function onChange(e) {
        setTodoValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        props.submitEvent(todoValue)
        navigate('/')
    }

    function onCancel() {
        navigate(-1)
    }

    return (
        <div className='formContainer'>
            <form onSubmit={onSubmit} className='form'>
                <label>{props.formTitle}</label>

                <textarea
                    placeholder="Escribe aqui una actividad a realizar..."
                    onChange={onChange}
                    value={todoValue}
                />

                <div className="TodoForm-buttonContainer">

                    <button
                        type="button"
                        className="TodoForm-button TodoForm-button--cancel"
                        onClick={onCancel}
                        >
                        Cancelar
                    </button> 

                    <button
                        type="submit"
                        className="TodoForm-button TodoForm-button--add"
                    >
                        {props.submitText}
                    </button>

                </div>
            </form>
        </div>
    )
}

export {TodoForm} 
import React from 'react' 
import './styles/TodoForm.css'
import { useTodos } from '../hooks/useTodos'
import { useNavigate } from 'react-router'

function TodoForm({formTitle, submitText, }) {
    const { stateModifiers } = useTodos()
    const navigate = useNavigate()
    
    const { addTodo } = stateModifiers
    const [todoValue, setTodoValue] = React.useState('')

    function onChange(e) {
        setTodoValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        addTodo(todoValue)
        navigate('/')
    }

    function onCancel() {
        navigate(-1)
    }

    return (
        <form onSubmit={onSubmit} className='form'>
            <label>{formTitle}</label>

            <textarea
                placeholder="Escribe aqui una actividad a realizar"
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
                    {submitText}
                </button>

            </div>
        </form>
    )
}

export {TodoForm} 
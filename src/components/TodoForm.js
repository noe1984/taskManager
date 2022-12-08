import React from 'react'
import './styles/TodoForm.css'
import { TodoContext } from './TodoContext'

function TodoForm() {
    const {addTodo, setOpenModal} = React.useContext(TodoContext)
    const [todoValue, setTodoValue] = React.useState('')

    function onChange(e) {
        setTodoValue(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault()
        addTodo(todoValue)
        setOpenModal(false)
    }

    function onCancel() {
        setOpenModal(false)
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>

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
                    Añadir
                </button>

            </div>
        </form>
    )
}

export {TodoForm}
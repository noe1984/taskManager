import React from 'react'
import { TodoForm } from '../components/TodoForm'

function EditTodoPage(params) {
    return (
        <TodoForm formTitle={'Edita tu todo'} submitText={'editar'} />
    )
}

export { EditTodoPage }
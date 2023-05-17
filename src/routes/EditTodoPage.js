import React from 'react'
import { TodoForm } from '../components/TodoForm'
import { useLocation, useParams } from 'react-router'
import { useTodos } from '../hooks/useTodos';
import { useSearchParams } from 'react-router-dom';


function EditTodoPage() {
    const { states, stateModifiers } = useTodos()
    const { editTodo } = stateModifiers
    const { getTodo, loading } = states
    
    const params = useParams()
    const id = Number(params.id)

    const location = useLocation()
    
    let textToEdit
    
    if (location.state?.todo.text) {
        textToEdit = location.state.todo.text
    } else if (loading ) {
        return <p>loading...</p>
    } else {
        const todo = getTodo(id)
        textToEdit = todo.text
    }
    
    return (
        <TodoForm 
            formTitle={'Edita tu todo'} 
            submitText={'editar'} 
            textToEdit={textToEdit} 
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export { EditTodoPage }
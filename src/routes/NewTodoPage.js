import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';

function NewTodoPage() {
    const { states, stateModifiers } = useTodos()
    const { addTodo } = stateModifiers
    return (
        <TodoForm formTitle={'Crea un nuevo todo'} submitText={'crear'} submitEvent={addTodo}/>
    )
}

export {NewTodoPage}

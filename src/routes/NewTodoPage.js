import React from 'react';
import { TodoForm } from '../components/TodoForm';

function NewTodoPage() {
    return (
        <TodoForm formTitle={'Crea un nuevo todo'} submitText={'crear'}/>
    )
}

export {NewTodoPage}

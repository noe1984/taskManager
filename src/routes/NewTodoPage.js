import React from 'react';
import { TodoForm } from '../components/TodoForm';
import { useTodos } from '../hooks/useTodos';
import newTask from '../assets/newTask.jpg'

function NewTodoPage() {
    const { states, stateModifiers } = useTodos()
    const { addTodo } = stateModifiers
    return (
        <div>
            <TodoForm 
                formTitle={'Crea un nuevo todo'} 
                submitText={'crear'} 
                submitEvent={addTodo}
                formImage={newTask}
            />
        </div>
    )
}

export {NewTodoPage}

import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContext';
import { Modal } from './components/Modal'
import { TodoForm } from './components/TodoForm';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import './AppUI.css'

function AppUI() {
    
    const {
        loading,
        error,
        searchedTodos, 
        completeTodo,
        removeTodos,
        openModal,
    } = React.useContext(TodoContext)
    
    return(
        <div className='AppUI'>
            <div className='AppUI-container'>
            <h1>My Task Manager</h1>
                <TodoCounter/>
                <TodoSearch/>
                    <CreateTodoButton />
                    <TodoList>
                        {loading && <TodosLoading />}
                        {error && <TodosError /> }
                        {(!loading && !searchedTodos.length) && <EmptyTodos /> }
                        {searchedTodos.map(todo => (
                            <TodoItem
                                key={todo.text}
                                text={todo.text}
                                completed={todo.completed}
                                onComplete={ () => completeTodo(todo.text) }
                                onRemove={ () => removeTodos(todo.text) }
                            />
                        ))}
                    </TodoList>
                {openModal && (
                    <Modal>
                        <TodoForm />
                    </Modal>
                )}
            </div>
        </div>            
    )
}

export {AppUI}
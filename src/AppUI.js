import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './components/TodoContext';

function AppUI() {
    
    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        removeTodos
    } = React.useContext(TodoContext)
    
    return(
        <React.Fragment>
            <TodoCounter/>
            <TodoSearch/>

                    <TodoList>
                        {loading && <p>Cargando todo's...</p>}
                        {error && <p>Hubo un error en la aplicacion</p>}
                        {(!loading && !searchedTodos.length) && <h2>Crea tu primer 'todo'</h2>}
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

            <CreateTodoButton />
        </React.Fragment>            
    )
}

export {AppUI}
import React from 'react'
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    removeTodos
}) {
    return (
    <React.Fragment>
        <TodoCounter 
        completed={completedTodos}
        total={totalTodos}
        />
        <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        />

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
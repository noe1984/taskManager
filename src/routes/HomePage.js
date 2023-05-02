import React from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodosLoading } from '../components/TodosLoading';
import { TodosError } from '../components/TodosError';
import { EmptyTodos } from '../components/EmptyTodos';
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodoButton';
import { TodoHeader } from '../components/TodoHeader';
import { ChangeAlert } from '../components/ChangeAlert';
import './styles/HomePage.css'

function HomePage() {
  const { states, stateModifiers } = useTodos()
  const {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    searchedTodos, 
} = states

const {
    synchronizeTodos,
    setSearchValue,
    completeTodo,
    removeTodos,
    addTodo,
} = stateModifiers

  return ( 
    <div className='AppUI'>
      <div className='AppUI-container'>
        <h1>My Task Manager</h1>

        <TodoHeader loading={loading}>
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

        <CreateTodoButton/>
        <ChangeAlert synchronizeTodos={synchronizeTodos}  />
        <TodoList 
          searchedTodos={searchedTodos}
          loading={loading}
          error={error}
          searchText={searchValue}
          totalTodos={totalTodos}

          onLoading={() => <TodosLoading/>}
          onError={() => <TodosError/>}
          onEmptyTodos={() => <EmptyTodos/>}
          onEmptySearchResults={(searchText) => <p>No hay resultados para {searchText}</p> }
          onRender={todo => (
          <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={ () => completeTodo(todo.text) }
              onRemove={ () => removeTodos(todo.text) }
              onEdit={ () => console.log('go to edit') }
          />
          )}
        >
          {/* {todo => (
            <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={ () => completeTodo(todo.text) }
                onRemove={ () => removeTodos(todo.text) }
            />
          )} */}
        </TodoList >
      </div>
    </div> 
  );
}

    export { HomePage }
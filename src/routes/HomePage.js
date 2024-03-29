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
import { useNavigate } from 'react-router';
import './styles/HomePage.css'
import logo from '../assets/logo.png'

function HomePage() {
  const { states, stateModifiers } = useTodos()
  const navigate = useNavigate()
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
  } = stateModifiers

  return (
    <div className='AppUI'>
      <div className='AppUI-container'>
        <div className='AppUI-container--title'>
          <h1>My Task Manager</h1>
          <img src={logo} />
        </div>

        <TodoHeader loading={loading}>
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader> 

        <CreateTodoButton loading={loading}/>
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
            key={todo.id} 
            text={todo.text} 
            completed={todo.completed}
            onComplete={ () => completeTodo(todo.id) }
            onRemove={() => 
              navigate('/remove/' + todo.id, {state: {todo}})
            }
            onEdit={ () => 
              navigate('/edit/' + todo.id, {state: {todo}})  
            }
          />
          )}  
        >
          {/* {todo => (
            <TodoItem
                key={todo.id}
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
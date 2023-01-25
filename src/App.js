import React from 'react';
import { useTodos } from './hooks/useTodos';
import { Modal } from './components/Modal'
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodos } from './components/EmptyTodos';
import { TodoForm } from './components/TodoForm';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoHeader } from './components/TodoHeader';
import { ChangeAlert } from './components/ChangeAlert';

function App() {
  const {
      loading,
      error,
      searchedTodos, 
      completeTodo,
      removeTodos,
      openModal,
      completedTodos, 
      totalTodos,
      searchValue, 
      setSearchValue,
      setOpenModal,
      addTodo,
      synchronizeTodos,
  } = useTodos() 

  return ( 
    <div className='AppUI'>
      <div className='AppUI-container'>
        <h1>My Task Manager</h1>

        <TodoHeader loading={loading}>
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        </TodoHeader>

        <CreateTodoButton setOpenModal={setOpenModal} />
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
        {openModal && (
            <Modal>
                <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
            </Modal>
        )}
      </div>
    </div> 
  );
}

export default App; 

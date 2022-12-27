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
// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];
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
  } = useTodos()

  return (
    <div className='AppUI'>
      <div className='AppUI-container'>
      <h1>My Task Manager</h1>
          <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos}/>
          <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
              <CreateTodoButton setOpenModal={setOpenModal} />
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
                  <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
              </Modal>
          )}
      </div>
    </div> 
  );
}

export default App; 

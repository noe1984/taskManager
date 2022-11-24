import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem('VERSION1')
  let parsedTodos
  
  if(!localStorageTodos) {
    localStorage.setItem('VERSION1', parsedTodos)
    parsedTodos = []
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)
  const [searchValue, setSearchValue] = React.useState('')
  const completedTodos = todos.filter(todo => todo.completed == true).length
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length>=1) {
    searchedTodos = todos
  } else {
    searchedTodos = todos.filter(todo => {
      let searchText = searchValue.toLowerCase()
      let todoText = todo.text.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const stringifiedTodos = (newTodos) => { 
    const toditos = JSON.stringify(newTodos)
    localStorage.setItem('VERSION1', toditos)
    setTodos(newTodos)
  }

  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true 
    stringifiedTodos(newTodos)
  }

  const removeTodos = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    stringifiedTodos(newTodos)
  }

  return (
    <AppUI 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      removeTodos={removeTodos}
    />
  );
}

export default App;

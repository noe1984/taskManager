import React from 'react';
import { AppUI } from './AppUI';
// import './App.css';

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'LALALALAA', completed: false },
// ];

function useLocalStorage(itemName, initialState) {
  const localStorageTodos = localStorage.getItem(itemName)
  let parsedTodos

  if(!localStorageTodos) {
    parsedTodos = initialState
    localStorage.setItem(itemName, parsedTodos)
  }else{
    parsedTodos = JSON.parse(localStorageTodos)
  }

  const [todos, setTodos] = React.useState(parsedTodos)

  const saveTodos = (todoITem) => { 
    const stringifiedTodos = JSON.stringify(todoITem)
    localStorage.setItem(itemName, stringifiedTodos) 
    setTodos(todoITem)
  }
  return [todos, saveTodos]
}

function App() {

  const [todos, saveTodos] = useLocalStorage('VERSION1', [])

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


  const completeTodo = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = true 
    saveTodos(newTodos)
  }

  const removeTodos = text => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
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

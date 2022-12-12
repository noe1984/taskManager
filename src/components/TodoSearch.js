import React from 'react';
import './styles/TodoSearch.css';
import {TodoContext} from './TodoContext'

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext)
  const onSearchValueChange = e => setSearchValue(e.target.value)
  
  return (
    <div>
      <input 
        className="TodoSearch" 
        placeholder="Busca aqui una tarea....." 
        value={searchValue}
        onChange={onSearchValueChange}
      />
    </div>
  )
  
}

export { TodoSearch }; 

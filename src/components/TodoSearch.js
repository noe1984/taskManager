import React from 'react';
import './styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
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

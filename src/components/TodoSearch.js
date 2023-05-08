import React from 'react';
import './styles/TodoSearch.css';

function TodoSearch({searchValue, setSearchValue, loading}) {
  const onSearchValueChange = e => setSearchValue(e.target.value)
  
  return (
    <div>
      <input 
        className={`TodoSearch ${loading && "TodoSearch--loading"}`}
        placeholder="Busca aqui una tarea....." 
        value={searchValue}
        onChange={onSearchValueChange} 
        disabled={loading}  
      /> 
    </div>
  )
  
}

export { TodoSearch }; 

import React from 'react';
import './styles/TodoSearch.css';
import {useSearchParams } from 'react-router-dom';

function TodoSearch({searchValue, setSearchValue, loading}) {
  const [searchParams, setSearchParams] = useSearchParams()
  const searchParamsValue = searchParams.get('search')
  

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value)
    setSearchParams({search: e.target.value})
  }
  
  return ( 
    <div>
      <input 
        className={`TodoSearch ${loading && "TodoSearch--loading"}`}
        placeholder="Busca aqui una tarea....." 
        value={searchParamsValue ?? searchValue}
        onChange={onSearchValueChange} 
        disabled={loading}  
      /> 
    </div>
  )
  
}




export { TodoSearch }; 

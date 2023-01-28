import React from 'react';
import './styles/TodoList.css'

function TodoList(props) {
  return (
    <section>
      <ul>
        {props.loading && props.onLoading()}
        {props.error && props.onError()}
        {(!props.loading && !props.totalTodos) && props.onEmptyTodos() }
        {(!props.searchedTodos.length && props.totalTodos !== 0) && props.onEmptySearchResults(props.searchText) }
        {(!props.loading && !props.error) && props.searchedTodos.map(props.children || props.onRender)}
      </ul>
    </section> 
  );
}

export { TodoList };

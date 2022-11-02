import react from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch.js";
import { TodoList } from "./TodoList.js";
import { TodoItem } from "./TodoItem.js";
import { CreateTodoButton } from "./CreateTodoButton.js";

function App() {
  return (
    <react.Fragment>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        <TodoItem />
      </TodoList>
      <CreateTodoButton />      
  </react.Fragment>
  );
}

export default App;

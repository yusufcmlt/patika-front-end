import { useEffect, useState } from "react";
import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filterFunction, setFilterFunction] = useState(() => {});

  const filterTodos = () => {
    if (filterFunction) {
      return todoList.filter(filterFunction);
    } else return todoList;
  };

  return (
    <>
      <header>
        <h1 className="todo__heading">todos</h1>
      </header>
      <div className="todo__container">
        <TodoForm setTodoList={setTodoList} />
        <TodoList list={filterTodos()} />
        <TodoFilter setFilterFunction={setFilterFunction} />
      </div>
    </>
  );
}

export default App;

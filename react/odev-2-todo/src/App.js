import { useEffect, useState } from "react";
import "./App.css";
import TodoFilter from "./components/TodoFilter";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const initialFilterFunction = (item) => item;

function App() {
  const [todoList, setTodoList] = useState([]);
  const [filteredTodo, setFilteredTodo] = useState([]);

  useEffect(() => {
    setFilteredTodo([...todoList]);
  }, [todoList]);

  return (
    <>
      <header>
        <h1 className="todo__heading">todos</h1>
      </header>
      <div className="todo__container">
        <TodoForm setTodoList={setTodoList} />
        <TodoList
          list={filteredTodo}
          setTodoList={setTodoList}
          todoList={todoList}
        />
        <TodoFilter setFilteredTodo={setFilteredTodo} todoList={todoList} />
      </div>
    </>
  );
}

export default App;

import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ list, setTodoList, todoList }) {
  return (
    <ul className="todo__list">
      {list.map((listItem) => (
        <TodoItem
          setTodoList={setTodoList}
          todoList={todoList}
          listItem={listItem}
        />
      ))}
    </ul>
  );
}

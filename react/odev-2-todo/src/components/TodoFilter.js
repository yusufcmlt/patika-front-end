import React from "react";

export default function TodoFilter({ setFilteredTodo, todoList }) {
  const getCompleted = () => {
    setFilteredTodo(todoList.filter((item) => item.isCompleted));
  };
  const getAll = () => {
    setFilteredTodo(todoList);
  };
  const getNotCompleted = () => {
    setFilteredTodo(todoList.filter((item) => !item.isCompleted));
  };

  return (
    <div className="todo__filter">
      <button className="todo__button button--all" onClick={getAll}>
        All
      </button>
      <button
        className="todo__button button--not-completed"
        onClick={getNotCompleted}
      >
        Not Completed
      </button>
      <button className="todo__button button--completed" onClick={getCompleted}>
        Completed
      </button>
    </div>
  );
}

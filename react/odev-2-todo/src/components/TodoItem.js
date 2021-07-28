import React, { useState } from "react";

export default function TodoItem({ listItem, setTodoList, todoList }) {
  const [todoStyle, setTodoStyle] = useState("");

  const deleteTodo = (id) => {
    setTodoList((prevState) => prevState.filter((item) => item.id !== id));
  };
  const completeTodo = (item) => {
    const modifiedlist = [...todoList];
    const modifiedItem = modifiedlist.findIndex((todo) => todo.id === item.id);
    if (modifiedlist[modifiedItem].isCompleted) {
      modifiedlist[modifiedItem].isCompleted = false;
      setTodoStyle("");
    } else {
      modifiedlist[modifiedItem].isCompleted = true;
      setTodoStyle(" item--completed");
    }

    setTodoList([...modifiedlist]);
  };

  return (
    <li className={`list__item${todoStyle}`} key={listItem.id} id={listItem.id}>
      {listItem.todoName}
      <button
        className="item__clear-button"
        onClick={() => {
          deleteTodo(listItem.id);
        }}
      >
        Clear
      </button>
      <button
        className="item__clear-button"
        onClick={() => {
          completeTodo({ ...listItem, isComleted: true });
        }}
      >
        Complete
      </button>
    </li>
  );
}

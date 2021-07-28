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
      setTodoStyle("item--completed");
    }

    setTodoList([...modifiedlist]);
  };

  return (
    <li className={`list__item`} key={listItem.id} id={listItem.id}>
      <span className={`${todoStyle}`}>{listItem.todoName}</span>
      <button
        className="item__clear-button"
        onClick={() => {
          deleteTodo(listItem.id);
        }}
      >
        Clear
      </button>
      <button
        className={`item__complete-button`}
        onClick={() => {
          completeTodo({ ...listItem });
        }}
      >
        Complete
      </button>
    </li>
  );
}

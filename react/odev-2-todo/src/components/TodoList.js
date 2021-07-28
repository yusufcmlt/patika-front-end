import React from "react";

export default function TodoList({ list }) {
  return (
    <ul className="todo__list">
      {list.map((listItem, index) => (
        <li key={index}>{listItem.todoName}</li>
      ))}
    </ul>
  );
}

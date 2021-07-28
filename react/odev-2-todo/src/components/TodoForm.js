import React, { useState } from "react";

const initialTodo = {
  todoName: "",
  isCompleted: false,
};

export default function TodoForm({ setTodoList }) {
  const [todoItem, setTodoItem] = useState(initialTodo);

  const handleTodoSubmit = (event) => {
    event.preventDefault();
    setTodoList((prevState) => [...prevState, todoItem]);
    setTodoItem(initialTodo);
  };

  const handleTodoChange = (event) => {
    const { value, name } = event.target;

    if (value.trim()) {
      console.log(value);
      setTodoItem((prevState) => ({ ...prevState, [name]: value }));
    }
  };
  return (
    <form className="todo__form" onSubmit={handleTodoSubmit}>
      <input
        name="todoName"
        type="text"
        className="todo__input"
        placeholder="What to do?"
        onChange={handleTodoChange}
      />
    </form>
  );
}

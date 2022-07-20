import React from "react";

const Todo = ({ todo, handleRemoveTodo }) => {
  return (
    <li className="todo">
      <span>{todo.name}</span>
      <div className="button_wrapper">
        <button>+</button>
        <button>-</button>
        <button onClick={() => handleRemoveTodo(todo)}>X</button>
      </div>
    </li>
  );
};

export default Todo;

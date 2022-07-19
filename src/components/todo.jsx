import React from "react";

const Todo = ({ todo }) => {
  return (
    <li className="todo">
      <span>{todo.name}</span>
      <div className="button_wrapper">
        <button>+</button>
        <button>-</button>
        <button>X</button>
      </div>
    </li>
  );
};

export default Todo;
import React from "react";

const Todo = ({ todo, handleRemoveTodo, handleIncrease }) => {
  return (
    <li className="todo">
      <span>{todo.name}</span>
      <span>{todo.count}</span>
      <div className="button_wrapper">
        <button onClick={() => handleIncrease(todo)}>+</button>
        <button>-</button>
        <button onClick={() => handleRemoveTodo(todo)}>X</button>
      </div>
    </li>
  );
};

export default Todo;

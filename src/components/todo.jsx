import React from "react";

const Todo = ({ todo, handleRemoveTodo, handleIncrease, handleDecrease }) => {
  return (
    <li className="todo">
      <span>{todo.name}</span>
      <span>{todo.count}</span>
      <div className="button_wrapper">
        <button onClick={() => handleIncrease(todo)}>+</button>
        <button onClick={() => handleDecrease(todo)}>-</button>
        <button onClick={() => handleRemoveTodo(todo)}>X</button>
      </div>
    </li>
  );
};

export default Todo;

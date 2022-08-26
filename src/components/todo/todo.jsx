import React from "react";

const Todo = ({ todo, handleRemoveTodo, handleIncrease, handleDecrease }) => {
  return (
    <li className="todo">
      <span data-testid="todo-name">{todo.name}</span>
      <span data-testid="todo-count">{todo.count}</span>
      <div className="button_wrapper">
        <button title="increase" onClick={() => handleIncrease(todo)}>
          +
        </button>
        <button title="decrease" onClick={() => handleDecrease(todo)}>
          -
        </button>
        <button title="remove" onClick={() => handleRemoveTodo(todo)}>
          X
        </button>
      </div>
    </li>
  );
};

export default Todo;

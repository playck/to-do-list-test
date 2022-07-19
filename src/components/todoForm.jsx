import React from "react";
import TodoAddForm from "./todoAddForm";

const TodoForm = ({ todoList }) => {
  console.log(todoList);
  return (
    <div className="todo_form">
      <TodoAddForm />
      <ul>
        {todoList.map((todo) => (
          <li>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;

import React from "react";
import Todo from "./todo";
import TodoAddForm from "./todoAddForm";

const TodoForm = ({ todoList }) => {
  console.log(todoList);
  return (
    <div className="todo_form">
      <TodoAddForm />
      <ul>
        {todoList.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;

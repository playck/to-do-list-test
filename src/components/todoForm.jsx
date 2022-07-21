import React from "react";
import Todo from "./todo";
import TodoAddForm from "./todoAddForm";

const TodoForm = ({
  todos,
  handleAddTodo,
  handleRemoveTodo,
  handleIncrease,
  handleDecrease,
}) => {
  return (
    <div className="todo_form">
      <TodoAddForm handleAddTodo={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleRemoveTodo={handleRemoveTodo}
            handleIncrease={handleIncrease}
            handleDecrease={handleDecrease}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;

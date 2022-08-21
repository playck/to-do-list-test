import React from "react";
import Todo from "./todo";
import TodoAddForm from "./form/todoAddForm";

const TodoForm = ({
  todos,
  handleAddTodo,
  handleRemoveTodo,
  handleIncrease,
  handleDecrease,
  resetTodoCount,
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
      <button onClick={() => resetTodoCount()}>Reset</button>
    </div>
  );
};

export default TodoForm;

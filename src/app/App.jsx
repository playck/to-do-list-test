import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "../components/navbar/navbar";
import TodoForm from "../components/todoForm/todoForm";

function App({ presenter }) {
  const [todos, setTodos] = useState(presenter.getTodos());

  const handleAddTodo = useCallback((todo) => {
    presenter.addTodo(todo, setTodos);
  }, []);

  const handleRemoveTodo = useCallback((todo) => {
    presenter.removeTodo(todo, setTodos);
  }, []);

  const handleIncrease = useCallback((todo) => {
    presenter.increaseTodoCount(todo, setTodos);
  }, []);

  const handleDecrease = useCallback((todo) => {
    presenter.decreaseTodoCount(todo, setTodos);
  }, []);

  const resetTodoCount = useCallback(() => {
    presenter.resetAllTodoCount(setTodos);
  });

  return (
    <div className="App">
      <div className="app_wrapper">
        <Navbar />
        <TodoForm
          todos={todos}
          handleAddTodo={handleAddTodo}
          handleRemoveTodo={handleRemoveTodo}
          handleIncrease={handleIncrease}
          handleDecrease={handleDecrease}
          resetTodoCount={resetTodoCount}
        />
      </div>
    </div>
  );
}

export default App;

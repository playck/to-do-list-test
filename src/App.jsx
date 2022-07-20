import { useCallback, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import TodoForm from "./components/todoForm";

function App({ presenter }) {
  const [todos, setTodos] = useState(presenter.getTodos());

  const handleAddTodo = useCallback((todo) => {
    presenter.addTodo(todo, setTodos);
  }, []);

  const handleRemoveTodo = useCallback((todo) => {
    presenter.removeTodo(todo, setTodos);
  });

  return (
    <div className="App">
      <div className="app_wrapper">
        <Navbar />
        <TodoForm
          todos={todos}
          handleAddTodo={handleAddTodo}
          handleRemoveTodo={handleRemoveTodo}
        />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Navbar from "./components/navbar";
import TodoForm from "./components/todoForm";

function App({ todoList }) {
  return (
    <div className="App">
      <div className="app_wrapper">
        <Navbar />
        <TodoForm todoList={todoList} />
      </div>
    </div>
  );
}

export default App;

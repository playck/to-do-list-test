import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoPresenter from "./components/todo_presenter";
const root = ReactDOM.createRoot(document.getElementById("root"));

const todoPresenter = new TodoPresenter([
  { id: 1, name: "코딩 스터디", count: 0 },
  { id: 2, name: "배그 하기", count: 0 },
  { id: 3, name: "홈트 하기", count: 0 },
]);

root.render(
  <React.StrictMode>
    <App presenter={todoPresenter} />
  </React.StrictMode>
);

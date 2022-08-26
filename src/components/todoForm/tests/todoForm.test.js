import TodoForm from "../todoForm";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("TodoForm component", () => {
  const todos = [
    { name: "영화보기", count: 2, id: 1 },
    { name: "운동", count: 3, id: 2 },
  ];

  let todoFormComponent;
  let handleAddTodo;
  let handleRemoveTodo;
  let handleIncrease;
  let handleDecrease;
  let resetTodoCount;

  beforeEach(() => {
    handleAddTodo = jest.fn();
    handleRemoveTodo = jest.fn();
    handleIncrease = jest.fn();
    handleDecrease = jest.fn();
    resetTodoCount = jest.fn();
    todoFormComponent = (
      <TodoForm
        todos={todos}
        handleAddTodo={handleAddTodo}
        handleRemoveTodo={handleRemoveTodo}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        resetTodoCount={resetTodoCount}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(todoFormComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("button Click", () => {
    beforeEach(() => {
      render(todoFormComponent);
    });

    it('calls handleAddTodo when click the "등록" button', () => {
      const input = screen.getByPlaceholderText("할 일은?");
      const button = screen.getByText("등록");
      const newTodo = "New Todo";
      userEvent.type(input, newTodo);
      userEvent.click(button);
      expect(handleAddTodo).toHaveBeenCalledWith(newTodo);
    });

    it('calls handleIncrease when click the "increase" button', () => {
      const button = screen.getAllByTitle("increase")[0];
      userEvent.click(button);
      expect(handleIncrease).toHaveBeenCalledWith(todos[0]);
    });

    it('calls handleDecrase when click the "decrease" button', () => {
      const button = screen.getAllByTitle("decrease")[0];
      userEvent.click(button);
      expect(handleDecrease).toHaveBeenCalledWith(todos[0]);
    });

    it('class handleRemoveTodo when click the "remove" button', () => {
      const button = screen.getAllByTitle("remove")[0];
      userEvent.click(button);
      expect(handleRemoveTodo).toHaveBeenCalledWith(todos[0]);
    });

    it("calls resetTodoCount when click the 'Reset' button", () => {
      const button = screen.getByText("Reset");
      userEvent.click(button);
      expect(resetTodoCount).toHaveBeenCalledTimes(1);
    });
  });
});

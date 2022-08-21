import Todo from "../todo";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Todo component", () => {
  const todo = { name: "todo", count: 3 };
  let TodoComponent;
  let handleIncrease;
  let handleDecrease;
  let handleRemoveTodo;

  beforeEach(() => {
    handleIncrease = jest.fn();
    handleDecrease = jest.fn();
    handleRemoveTodo = jest.fn();
    TodoComponent = (
      <Todo
        todo={todo}
        handleIncrease={handleIncrease}
        handleDecrease={handleDecrease}
        handleRemoveTodo={handleRemoveTodo}
      />
    );
  });

  it("renders", () => {
    const component = renderer.create(TodoComponent);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("button Click", () => {
    beforeEach(() => {
      render(TodoComponent);
    });

    it('calls handleIncrease when click "increase" button', () => {
      const button = screen.getByTitle("increase");
      userEvent.click(button);
      expect(handleIncrease).toHaveBeenCalledWith(todo);
    });

    it('calls handleDecrease when click "decrease" button', () => {
      const button = screen.getByTitle("decrease");
      userEvent.click(button);
      expect(handleDecrease).toHaveBeenCalledWith(todo);
    });

    it('class handleRemove when click "remove" button', () => {
      const button = screen.getByTitle("remove");
      userEvent.click(button);
      expect(handleRemoveTodo).toHaveBeenCalledWith(todo);
    });
  });
});

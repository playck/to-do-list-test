import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoAddForm from "../todoAddForm";
import renderer from "react-test-renderer";

describe("TodoAddForm", () => {
  it("redners", () => {
    const component = renderer.create(
      <TodoAddForm handleAddTodo={jest.fn()} />
    );
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("Form Submit", () => {
    let handleAddTodo;
    let input;
    let button;

    beforeEach(() => {
      handleAddTodo = jest.fn();
      render(<TodoAddForm handleAddTodo={handleAddTodo} />);
      input = screen.getByPlaceholderText("할 일은?");
      button = screen.getByText("등록");
    });

    it("calls AddTodo when button is clicked and input not empty", () => {
      userEvent.type(input, "New Todo");
      userEvent.click(button);

      expect(handleAddTodo).toHaveBeenCalledWith("New Todo");
    });

    it("does not call AddTodo when the todo is empty", () => {
      // userEvent.type(input, "");
      // Error: Expected key descriptor but found "" in ""
      // falsy를 허용하지 않음
      userEvent.clear(input);
      userEvent.click(button);

      expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });
  });
});

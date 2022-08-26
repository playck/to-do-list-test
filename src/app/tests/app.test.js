import TodoPresenter from "../todo_presenter";
import renderer from "react-test-renderer";
import App from "../App";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("App", () => {
  let presenter;
  beforeEach(() => {
    presenter = new TodoPresenter([
      { id: 1, name: "코딩 스터디", count: 0 },
      { id: 2, name: "배그 하기", count: 0 },
      { id: 3, name: "홈트 하기", count: 1 },
    ]);
  });

  it("renders", () => {
    const component = renderer.create(<App presenter={presenter} />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  describe("App Component", () => {
    beforeEach(() => {
      render(<App presenter={presenter} />);
    });

    it("adds new todo", () => {
      const newTodo = "Coding";
      const input = screen.getByPlaceholderText("할 일은?");
      const button = screen.getByText("등록");
      userEvent.type(input, newTodo);
      userEvent.click(button);
      const addedTodoName = screen.getAllByTestId("todo-name")[3];
      expect(addedTodoName.innerHTML).toBe(newTodo);
      const addedTodoCount = screen.getAllByTestId("todo-count")[3];
      expect(addedTodoCount.innerHTML).toBe("0");
    });

    it("remove the item", () => {
      const firstLi = screen.getAllByTitle("remove")[0];
      userEvent.click(firstLi);
      const nextLi = screen.getAllByTestId("todo-name")[0];
      expect(nextLi.innerHTML).not.toBe("코딩 스터디");
    });

    it("increases the todo counter", () => {
      const button = screen.getAllByTitle("increase")[0];
      userEvent.click(button);
      const count = screen.getAllByTestId("todo-count")[0];
      expect(count.innerHTML).toBe("1");
    });

    it("decreases the todo counter", () => {
      const button = screen.getAllByTitle("decrease")[2];
      userEvent.click(button);
      const count = screen.getAllByTestId("todo-count")[2];
      expect(count.innerHTML).toBe("0");
    });

    it("resets all todo counters", () => {
      const button = screen.getByText("Reset");
      userEvent.click(button);
      screen.getAllByTestId("todo-count").forEach((count) => {
        expect(count.innerHTML).toBe("0");
      });
    });
  });
});

import TodoPresenter from "../todo_presenter";

describe("todoPresenter", () => {
  const todos = [
    { id: 1, name: "코딩 스터디", count: 1 },
    { id: 2, name: "배그 하기", count: 0 },
  ];

  let presenter;
  let update;

  beforeEach(() => {
    presenter = new TodoPresenter(todos);
    update = jest.fn();
  });

  it("inits with todos", () => {
    expect(presenter.getTodos()).toEqual(todos);
  });

  it("increae todo count and call update callback", () => {
    presenter.increaseTodoCount(todos[0], update);

    expect(presenter.getTodos()[0].count).toBe(2);
    checkUpdate();
  });

  it("decrease todo count and call update callback", () => {
    presenter.decreaseTodoCount(todos[0], update);

    expect(presenter.getTodos()[0].count).toBe(0);
    checkUpdate();
  });

  it("count value can not be less than zero when decrease", () => {
    presenter.decreaseTodoCount(todos[0], update);
    presenter.decreaseTodoCount(todos[0], update);

    expect(presenter.getTodos()[0].count).toBe(0);
  });

  it("removes todo from the list", () => {
    presenter.removeTodo(todos[0], update);

    expect(presenter.getTodos(0).length).toBe(1);
    expect(presenter.getTodos()[0].name).toBe("배그 하기");
    checkUpdate();
  });

  it("adds new todo to the list", () => {
    presenter.addTodo("운동", update);

    expect(presenter.getTodos()[2].name).toBe("운동");
    expect(presenter.getTodos()[2].count).toBe(0);
    checkUpdate();
  });

  it("resets all count to zero", () => {
    presenter.resetAllTodoCount(update);
    expect(presenter.getTodos()[0].count).toBe(0);
    expect(presenter.getTodos()[1].count).toBe(0);
    checkUpdate();
  });

  function checkUpdate() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getTodos());
  }
});

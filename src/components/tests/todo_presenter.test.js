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

  function checkUpdate() {
    expect(update).toHaveBeenCalledTimes(1);
    expect(update).toHaveBeenCalledWith(presenter.getTodos());
  }
});

export default class TodoPresenter {
  constructor(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(name, update) {
    this.todos = [...this.todos, { id: Date.now(), name }];
    update(this.todos);
  }
}

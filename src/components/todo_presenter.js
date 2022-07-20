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

  removeTodo(name, update) {
    this.todos = this.todos.filter((todo) => todo.id !== name.id);
    update(this.todos);
  }
}

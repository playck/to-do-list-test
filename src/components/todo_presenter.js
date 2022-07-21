export default class TodoPresenter {
  constructor(todos) {
    this.todos = todos;
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo, update) {
    this.todos = [...this.todos, { id: Date.now(), name: todo, count: 0 }];
    update(this.todos);
  }

  removeTodo(todo, update) {
    this.todos = this.todos.filter((el) => todo.id !== el.id);
    update(this.todos);
  }

  increaseTodoCount(todo, update) {
    this.todos = this.todos.map((el) => {
      if (el.id === todo.id) {
        return { ...todo, count: todo.count + 1 };
      }
      return el;
    });
    update(this.todos);
  }

  decreaseTodoCount(todo, update) {
    this.todos = this.todos.map((el) => {
      if (el.id === todo.id) {
        const count = el.count - 1;
        return { ...todo, count: count < 0 ? 0 : count };
      }
      return el;
    });
    update(this.todos);
  }

  resetAllTodoCount(update) {
    this.todos = this.todos.map((el) => {
      if (el.count !== 0) {
        return { ...el, count: 0 };
      }
      return el;
    });
    update(this.todos);
  }
}

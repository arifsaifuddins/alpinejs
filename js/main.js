function todosList() {
  function getLocalStorage() {
    if (JSON.parse(localStorage.getItem('todos').length > 0)) {
      return JSON.parse(localStorage.getItem('todos'));
    }
    return []
  }

  return {
    todos: getLocalStorage(),
    todoId: 0,
    todoTitle: '',
    todoFinish: false,
    addTodo() {
      if (this.todoTitle.trim() === '') {
        return
      }
      this.todos.unshift({
        id: this.todoId,
        title: this.todoTitle,
        isFinish: this.todoFinish
      })
      this.todoId++
      this.todoTitle = ''
      this.addToLocalStorage()
    },
    finish(id) {
      this.todos = this.todos.filter(todo => {
        if (id == todo.id) {
          todo.isFinish = !todo.isFinish
        }
        return todo
      })
      this.addToLocalStorage()
    },
    removeTodo(id) {
      this.todos = this.todos.filter(todo => id !== todo.id)
      this.addToLocalStorage()
    },
    addToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos))
    }
  }
}
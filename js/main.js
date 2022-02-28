function todosList() {
 // function getLocalStorage() {
  //  if (localStorage.length > 0) {
  //    return JSON.parse(localStorage.getItem('todos'));
  //  } else if (localStorage.length == 0) {
  //    return []
  //  }
  // }

  return {
    // todos: getLocalStorage(),
    todos: (localStorage.length == null) ? [] : JSON.parse(localStorage.getItem('todos')),
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

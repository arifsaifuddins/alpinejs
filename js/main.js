function todos() {
  return {
    todos: [],
    todoId: 0,
    todoTitle: '',
    addTodo() {
      if (this.todoTitle.trim() === '') {
        return
      }
      this.todos.push({
        id: this.todoId,
        title: this.todoTitle,
        isFinish: false
      })
      this.todoId++
      this.todoTitle = ''
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
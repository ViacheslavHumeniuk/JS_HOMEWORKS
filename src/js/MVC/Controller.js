const Controller = {
  form: document.querySelector('#todoForm'),
  todoItemsContainer: document.querySelector('[data-todo-items]'),

  formHandler (e) {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input, textarea')
    const data = {}

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Lack of data!')
      data[input.name] = input.value
    }

    const savedItem = Model.saveTodoItem(data)
    View.addTodoItemToList(savedItem)
    View.resetForm()
  },

  loadedHandler () {
    Model.todos.forEach(item => View.addTodoItemToList(item))
  },

  handleDeleteItem (e) {
    e.stopPropagation()
    if (!e.target.hasAttribute('data-remove-btn')) return
    const todoItemId = e.target.closest('[data-todo-id]').getAttribute('data-todo-id')
    try {
      Model.deleteTodoItem(todoItemId)
      View.removeTodoItem(todoItemId)
    } catch (err) {
      alert(err.message)
    }
  },

  init () {
    this.form.addEventListener('submit', this.formHandler.bind(this))
    document.addEventListener('DOMContentLoaded', this.loadedHandler.bind(this))
    this.todoItemsContainer.addEventListener('click', this.handleDeleteItem.bind(this))
  }
}

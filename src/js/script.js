(function () {
  const DB_NAME = 'saved_data'
  const form = document.querySelector('#todoForm')
  const todoItemsContainer = document.querySelector('[data-todo-items]')
  const clearFormButton = document.getElementById('clearForm')
  const clearAllTasksButton = document.getElementById('clearAllTasks')

  const createTodoItemTemplate = (config) => {
    const wrapper = document.createElement('div')
    wrapper.className = 'col-4'

    wrapper.innerHTML = `
      <div class="taskWrapper">
        <div class="taskHeading">${config.title}</div>
        <div class="taskDescription">${config.description}</div>
        <div class="taskControls">
          <input type="radio" name="taskStatus" class="form-check-input" ${config.completed ? 'checked' : ''}>
          <button class="btn btn-remove">Remove</button>
        </div>
      </div>`

    return wrapper
  }

  const appendTodoItem = (element) => {
    todoItemsContainer.append(element)
  }

  const saveData = (data) => {
    localStorage.setItem(DB_NAME, JSON.stringify(data))
  }

  const getData = () => {
    return localStorage.getItem(DB_NAME) ? JSON.parse(localStorage.getItem(DB_NAME)) : []
  }

  const loadData = () => {
    const data = getData()
    data.forEach((item, index) => {
      const todoItem = createTodoItemTemplate(item)
      appendTodoItem(todoItem)
      attachItemEventListeners(todoItem, index)
    })
  }

  const clearAllTasks = () => {
    localStorage.removeItem(DB_NAME)
    todoItemsContainer.innerHTML = ''
  }

  const attachItemEventListeners = (todoItem, index) => {
    const removeButton = todoItem.querySelector('.btn-remove')
    const statusRadio = todoItem.querySelector('.form-check-input')

    removeButton.addEventListener('click', () => {
      const data = getData()
      data.splice(index, 1)
      saveData(data)
      todoItemsContainer.removeChild(todoItem)
    })

    statusRadio.addEventListener('change', () => {
      const data = getData()
      data[index].completed = statusRadio.checked
      saveData(data)
    })
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputs = e.target.querySelectorAll('input, textarea')
    const data = {}

    for (const input of inputs) {
      if (!input.value.trim()) return alert('Lack of data!')
      data[input.name] = input.value
    }

    data.completed = false
    const todoItem = createTodoItemTemplate(data)
    appendTodoItem(todoItem)
    const currentData = getData()
    currentData.push(data)
    saveData(currentData)
    e.target.reset()
    attachItemEventListeners(todoItem, currentData.length - 1)
  })

  clearFormButton.addEventListener('click', () => {
    form.reset()
  })

  clearAllTasksButton.addEventListener('click', () => {
    clearAllTasks()
  })

  window.addEventListener('load', () => {
    loadData()
  })
})()

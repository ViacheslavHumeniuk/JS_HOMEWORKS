'use strict'
document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault()

  const formData = new FormData(this)
  const formObject = {}

  formData.forEach((value, key) => {
    formObject[key] = value
  })

  localStorage.setItem('formData', JSON.stringify(formObject))
  alert('Form data saved!')
})

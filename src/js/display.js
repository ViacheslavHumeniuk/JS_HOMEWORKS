document.addEventListener('DOMContentLoaded', function () {
  const dataList = document.getElementById('data-list')
  const noDataMessage = document.getElementById('no-data')
  const formData = localStorage.getItem('formData')

  if (formData) {
    const data = JSON.parse(formData)
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        const listItem = document.createElement('li')
        listItem.className = 'list-group-item'
        listItem.textContent = `${key}: ${data[key]}`
        dataList.appendChild(listItem)
      }
    }
    noDataMessage.style.display = 'none'
  } else {
    dataList.style.display = 'none'
  }
})

const propertyGenerator = async function * (url) {
  const response = await fetch(url)
  const data = await response.json()

  for (const obj of data) {
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        yield { [key]: obj[key] }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', async () => {
  const propertyList = document.getElementById('property-list')
  const generator = propertyGenerator('https://jsonplaceholder.typicode.com/users')

  const displayNextProperty = async function () {
    const { value, done } = await generator.next()
    if (done) {
      clearInterval(intervalId)
      return
    }

    const listItem = document.createElement('li')
    listItem.className = 'list-group-item'
    listItem.textContent = JSON.stringify(value)
    propertyList.appendChild(listItem)
  }

  const intervalId = setInterval(displayNextProperty, 500)
})

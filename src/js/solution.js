
'use strict'

const arr = [1, 2, 3]
const body = document.body
const generateList = (array) => {
    const ul = document.createElement('ul')
    document.body.appendChild(ul)
    array.forEach(item => {
        const li = document.createElement('li')
        if (!Array.isArray(item)) {
            li.textContent = item
        }
        ul.appendChild(li)

        if (Array.isArray(item)) {
            li.appendChild(generateList(item))
        }
    })
    return ul
}
const testArr = [1, 2, [1.1, 1.2, 1.3], 3]
body.appendChild(generateList(testArr))
generateList(arr)

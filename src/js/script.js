'use strict'

// 1
const sum = (a, b) => a + b
console.log(sum(2, 2))

// 2

const stringLength = str => {
  if (typeof str === 'string') {
    return str.length
  }
}
console.log(stringLength('Hello'))

// 3

const add = (arr) => {
  const result = []
  for (const num of arr) {
    result.push(num + 1)
  }
  return result
}
console.log(add([1, 2, 3, 4, 5]))

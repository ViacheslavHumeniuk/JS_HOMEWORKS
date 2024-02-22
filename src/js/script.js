'use strict'

const myApply = function (func, args) {
  if (typeof func !== 'function') {
    throw new TypeError('Першим аргументом має бути функція.')
  }

  return func(...args)
}

const add = function (x, y) {
  return x + y
}

const myArgs = [3, 4]
const result = myApply(add, myArgs)
console.log('Результат:', result)

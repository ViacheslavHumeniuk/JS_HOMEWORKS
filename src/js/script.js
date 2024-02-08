'use strict'

const array = ['Andrey', 'Misha', 'Katya', 'Alex', 'Anya', 'Arthur', 'Anya', 'Max']

const indexOf = function (names, array) {
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === names) return i
  }
  return -1
}

const lastIndexOf = function (names, array) {
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] === names) return i
  }
  return -1
}

const find = function (array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i], i, array)) return array[i]
  }
}

const result = find(array, (element) => {
  return element.length > 5
})


const findIndex = function (array, cb) {
  for (let i = 0; i < array.length; i += 1) {
    if (cb(array[i], i, array)) return i
  }
  return -1
}

const index = findIndex(array, (element) => element.length < 4)

console.log(index)

const includes = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === name) {
      return true
    }
  }
  return false
}
const innerEvery = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false
    }
  }
  return true
}

const every = function (callback) {
  return innerEvery.call(this, callback)
}

const names = every.call(array, (element) => element.length > 2)

const some = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      return true
    }
  }
  return false
}

const result = array.some((element) => element.length > 4)


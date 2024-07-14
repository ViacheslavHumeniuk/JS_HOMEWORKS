'use strict'
const createArrayIterator = function (arr) {
  let index = 0

  return {
    [Symbol.iterator]: function () {
      return this
    },
    next: function () {
      if (index < arr.length) {
        return { value: arr[index++], done: false }
      } else {
        return { value: undefined, done: true }
      }
    }
  }
}

'use strict'

const customFlat = function (arr) {
  if (arguments.length !== 1) {
    throw new Error('Function accepts only 1 argument, too much arguments provided')
  }

  if (!Array.isArray(arr)) {
    throw new Error('Input must be an array')
  }

  const flattenedArray = []

  const flattenHelper = function (array) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        flattenHelper(array[i])
      } else {
        flattenedArray.push(array[i])
      }
    }
  }

  flattenHelper(arr)

  return flattenedArray
}

const complexArray = [
  [1, 2, [3.1, 3.2, [3.21, 3.22]], 4],
  [5, [6, [7, [8, 9]]]],
  [[10, 11], 12, 13]
]

const flattenedArray = customFlat(complexArray)
console.log(flattenedArray)

'use strict'

const customReduce = (array, callback, initialValue) => {
  let accumulator = initialValue === undefined ? array[0] : initialValue
  const startIndex = initialValue === undefined ? 1 : 0

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array)
  }

  return accumulator
}

const numbers = [5, 4, 12, 19, 12, 2, 6, 8, 17, 10]
const sum = customReduce(numbers, (accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

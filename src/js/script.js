'use strict'

const numbers = [5, 4, 12, 19, 12, 2, 6, 8, 17, 10]

const getAverage = (numbers) => {
  const total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
  }, 0)
  return total / numbers.length
}

console.log(getAverage(numbers))

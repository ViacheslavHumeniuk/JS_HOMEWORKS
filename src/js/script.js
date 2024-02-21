'use strict'
// task 1

const getFactorial = function (n) {
  if (n === 0 || n === 1) {
    return 1
  } else {
    return n * getFactorial(n - 1)
  }
}
console.log(getFactorial(3))

// task 2

const pow = function (num, degree) {
  if (degree === 0) {
    return 1
  } else if (degree > 0) {
    return num * pow(num, degree - 1)
  } else {
    return 1 / pow(num, -degree)
  }
}

console.log(pow(2, 3))
console.log(pow(3, 2))
console.log(pow(5, -2))

// task 3

const sumWithoutPlus = function (a, b) {
  if (b === 0) {
    return a
  }
  for (let i = 0; i < b; i++) {
    a++
  }
  return a
}

console.log(sumWithoutPlus(5, 3))

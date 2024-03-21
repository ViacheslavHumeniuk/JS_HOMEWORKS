'use strict'

const strings = [('ball'), ('do'), ('Kappa'), ('city17'), ('daedalus')]

const filteredStrings = strings.filter(string => string.length >= 5)
console.log(filteredStrings)


const numbers = [10, 20, 3, 4, 50, 6, 7, 8, 9, 40]

const sum = (array) => array.reduce((acc, number) => acc + number / array.length, 0)
console.log(sum(numbers))

const numbers = [10, 20, 3, 4, 50, 6, 7, 8, 9, 40]

const sum = (array) => array.filter((number) => number % 2 === 0).reduce((acc, number) => acc + number, 0)
console.log(sum(numbers);

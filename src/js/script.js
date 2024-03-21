'use strict'

// task 1
const priceObject = {
  productName: 'Товар',
  price: 100
}
const price = (priceObject) => {
  const newPrice = priceObject.price / 100 * 90
  return {
    productName: priceObject.productName,
    price: newPrice
  }
}
console.log(price(priceObject))
console.log(priceObject)

// task 2
const students = [
  {
    student: 'John',
    grate: 60
  },
  {
    student: 'Dave',
    grate: 31
  },
  {
    student: 'Keth',
    grate: 90
  },
  {
    student: 'Sam',
    grate: 97
  }
]
const studentsFilter = array => array.filter(student => student.grate >= 90)

console.log(studentsFilter(students))

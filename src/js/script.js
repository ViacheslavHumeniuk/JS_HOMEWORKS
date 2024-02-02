'use strict'

const year = +prompt('Введіть число')
if (isNaN(year)) throw new Error('Ви ввели не число')
switch (year) {
  case 1:
    alert(`${year} рік`)
    break
  case 2:
  case 3:
  case 4:
    alert(`${year} роки`)
    break
  default:
    alert(`${year} років`)
}

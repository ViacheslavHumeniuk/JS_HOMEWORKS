'use strict'

const user = {}
Object.defineProperty(user, 'name', {
  value: 'John',
  writable: false,
  configurable: true
})

Object.defineProperty(user, 'age', {
  value: 30,
  enumerable: false
})

console.log('for...in loop:')
for (const key in user) {
  console.log(key)
}

console.log('\nObject.keys():')
console.log(Object.keys(user))

// Розширене завдання

Object.defineProperty(user, 'fullName', {
  get: function () {
    return this.name
  },
  set: function (value) {
    const parts = value.split(' ')
    this.name = parts[0]
    this.surname = parts[1]
  },
  enumerable: true,
  configurable: true
})

console.log('\nРобота з геттером та сеттером fullName:')
user.fullName = 'Jane Doe'
console.log(user.name)
console.log(user.surname)

// Додаткове Завдання:

const obj = {
  name: 'John'
}

Object.freeze(obj)

obj.name = 'Jane'

Object.defineProperty(obj, 'age', {
  value: 30
})
const descriptor = Object.getOwnPropertyDescriptor(obj, 'name')
console.log(descriptor)

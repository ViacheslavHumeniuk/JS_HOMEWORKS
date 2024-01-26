'use strict'

const createUser = function (name, age) {
  const user = { name: [name], age: [age] }
  user.greet = greet
  return user
}
const greet = function () {
  console.log(`Hello, my name is ${this.name}`)
}

const user1 = createUser('Mike', 23); user1.greet()
const user2 = createUser('Emily', 18); user2.greet()

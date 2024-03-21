'use strict'

const Mybind = function (fn, context, ...boundArgs) {
  return function (...args) {
    return fn.apply(context, [...boundArgs, ...args])
  }
}
const greet = function (greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation
}
const user = { user: 'Alex' }
const greetAlex = Mybind(greet, user, 'Hello')
console.log(greetAlex('!'))

'use strict'

const parseJSON = (jsonString) => {
  try {
    return JSON.parse(jsonString)
  } catch (error) {
    throw new Error('Invalid JSON string')
  }
}

try {
  console.log(parseJSON('{"name": "John", "age": 30}'))
  console.log(parseJSON('{"name": "John", "age":'))
} catch (error) {
  console.log(error.message)
}

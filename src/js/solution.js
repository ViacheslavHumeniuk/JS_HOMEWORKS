'use strict'

const ul = document.getElementById('ulId')
const attributes = []
const nameAttributes = []

for (const attr of ul.attributes) {
    attributes.push(attr.value)
    nameAttributes.push(attr.name)
}
console.log(attributes, nameAttributes)

ul.lastElementChild.textContent = 'Привіт мене звати Славік'
ul.firstElementChild.setAttribute('data-my-name', 'Славік')
ul.removeAttribute('data-dog-tail')

'use strict';
// Перша задача

const input_str1 = prompt("Введіть перший рядок:");
const input_str2 = prompt("Введіть другий рядок:");
const input_str3 = prompt("Введіть третій рядок:");

const result = input_str2 + input_str1 + input_str3;
console.log("Результат:", result)

// Друга задача

const inputNumber = prompt("Введіть п'ятизначне число:");
const digitsArray = inputNumber.split('').join(' ');
console.log("Цифри у вихідному порядку:", digitsArray);
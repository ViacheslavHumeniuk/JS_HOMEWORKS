'use strict';

const calculate = prompt('виберіть дію (add, sub, mult, div)')
const num1 = +prompt("Перше число")
const num2 = +prompt("Друге число")

if (calculate === "+") {
    alert (num1 + '+' + num2 + "=" + (num1+num2));
} else if (calculate === "-") {
    alert (num1 + '-' + num2 + "=" + (num1-num2));
} else if (calculate === "*") {
    alert (num1 + '*' + num2 + "=" + (num1*num2));
} else if (calculate === "/") {
    alert (num1 + '/' + num2 + "=" + (num1/num2));
}

'use strict';

// Завдання 1

const x = 10;
const y = 7;

console.log(x > y ? 'x більше за y' : 'x не більше,ніж y')

// Завдання 2

const input = +prompt("Введіть ціле число");
const num = Math.abs(input);
const length = input.toString().length;

if (isNaN(input)) {
    alert("Введено не число");
}
if (length === 1) {
    alert("Число " + num + " однозначне " + (input > 0 ? " позитивне" : " негативне"));
} else if (length === 2) {
    alert("Число " + num + " двоцифрове " + (input > 0 ? "позитивне" : " негативне"));
} else {
    alert("Число " + num + " троцифрове або більше " + (input > 0 ? " позитивне" : " негативне"));
}
// Завдання 3

const num1 = +prompt('Введіть перше число');
const num2 = +prompt('Введіть друге число');
const num3 = +prompt('Введіть третє число');

if (num1 >= num2 && num1 >= num3) {
    alert('найбільше число: ' + num1);
} else if (num2 >= num1 && num2 >= num3) {
    alert('найбільше число: ' + num2);
} else {
    alert('Найбільше число: ' + num3);
}
// Завдання 4

const a = +prompt("Введіть довжину першої сторони:");
const b = +prompt("Введіть довжину другої сторони:");
const c = +prompt("Введіть довжину третьої сторони:");

if (a + b > c && a + c > b && b + c > a) {
    alert("Трикутник існує.");
} else {
    alert("Такий трикутник не існує. Сума будь-яких двох сторін повинна бути більшою за третю.");
}

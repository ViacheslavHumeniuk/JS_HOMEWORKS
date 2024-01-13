'use strict';

// Завдання 1 Вивести на сторінку в один рядок через кому числа від 10 до 20.

let result = "";

for (let i = 10; i <= 20; i++) {
    result += i + ", ";
}

alert(result);

// Завдання 2 Вивести квадрати чисел від 10 до 20.

for (let i = 10; i <= 20; i++) {
    const square = i * i;
    alert(square + " ");
}

// Завдання 3 Вивести таблицю множення на 7.

for (let i = 1; i <= 10; i++) {
    const result = i * 7;
    alert(result);
}

// Завдання 4 Знайти суму всіх цілих чисел від 1 до 15.

let sum = 0;

for (let i = 1; i <= 15; i++) {
    sum += i;
}

console.log("Сума всіх цілих чисел від 1 до 15: " + sum);

// Завдання 5 Знайти добуток усіх цілих чисел від 15 до 35.

let number = 1;

for (let i = 15; i <= 35; i++) {
    number *= i;
}

console.log("Добуток усіх цілих чисел від 15 до 35: " + number);

// Завдання 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.

let sum = 0;
let count = 0;

for (let i = 1; i <= 500; i++) {
    sum += i;
    count++;
}

const average = sum / count;

console.log("Середнє арифметичне від 1 до 500: " + average);

// Завдання 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let sum = 0;

for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        sum += i;
    }
}

console.log("Сума лише парних чисел від 30 до 80: " + sum);

// Завдання 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.

for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        console.log(i);
    }
}

// Завдання 9 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.

const number = 24;
console.log("Дільники числа " + number + ":");

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}

// Завдання 10 Визначити кількість його парних дільників.

const number = 24;
let countEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        countEvenDivisors++;
    }
}

console.log("Кількість парних дільників числа " + number + ": " + countEvenDivisors);

// Завдання 11 Знайти суму його парних дільників.

const number = 24;
let sumEvenDivisors = 0;

for (let i = 1; i <= number; i++) {
    if (number % i === 0 && i % 2 === 0) {
        sumEvenDivisors += i;
    }
}

console.log("Сума парних дільників числа " + number + ": " + sumEvenDivisors);

// Завдання 12 Надрукувати повну таблицю множення від 1 до 10.

const multiplicationMin = 1;
const multiplicationMax = 10;

for (let i = multiplicationMin; i <= multiplicationMax; i++) {
    for (let j = multiplicationMin; j <= multiplicationMax; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
}
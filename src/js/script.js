'use strict';

// Завдання 1 Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <=30; i += 0.5) {
    console.log(i)
}

// Завдання 2 Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const currencyRate = 27;

for (let usd= 10; usd <= 100; usd += 10) {
   const uah = usd * currencyRate;
   console.log (`${usd} доларів = ${uah} гривень`);
}

// Завдання 3 Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

 const N = 100;

 for (let i = 1; i <= 100; i++) {
    const square = i * i;
    if (square <= N ) {
        console.log (i)
    }
 }

// Завдання 4 Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

const examNum = 15;
let prime = true;

if (examNum <= 1) {
    prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(examNum); i++) {
        if (examNum % i === 0) {
            prime = false;
            break;
        }
    }
}
if (prime) {
    console.log(`${examNum} є простим числом.`)
} else {
    console.log(`${examNum} не є простим числом`)
}

// Завдання 5 Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
const checkNum = 75;

// Знаходимо логарифм за основою 3 від числа
const logarithm = Math.log(checkNum) / Math.log(3);

// Перевіряємо, чи результат є цілим числом
if (Number.isInteger(logarithm)) {
    console.log(checkNum + " можна отримати зведенням числа 3 у деякий ступінь.");
} else {
    console.log(checkNum + " не можна отримати зведенням числа 3 у деякий ступінь.");
}

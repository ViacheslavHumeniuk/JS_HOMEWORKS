'use strict';

// ** Завдання 1 **
const arr = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
alert("Сума елементів масиву: " + sum);

// ** Завдання 2 **
const arr = [1, 2, 3, 4, 5];
let sumSquare = 0;

for (let i = 0; i < arr.length; i++) {
    sumSquare += Math.pow(arr[i], 2);
}
alert("Сума квадратів елементу масиву: " +sumSquare);
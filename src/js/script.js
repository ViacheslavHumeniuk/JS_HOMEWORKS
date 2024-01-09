'use strict';

const user = prompt("Введіть число");
let num = parseInt(user);
if (!isNaN(num) && num >= 1) {
    let min = 0;
    for (let divider = 2; divider <= num; divider++) {
        if (num % divider === 0) {
            min = divider;
            break;
        }
    }
    if (min !== 0) {
        console.log(`Мінімальний дільник числа ${num}: ${min}`)
    }
} else {
    console.log("NaN");

}
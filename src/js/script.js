'use strict'

let a = 0;

startLoop: for (let b = 1; b <= 20; b++) {
    if (b % 2 === 0) {
        continue startLoop;
    }
    a += b;
}
alert(`Сума непарних чисел: ${a}`);
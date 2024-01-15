'use strict';

const number = +prompt('Введіть число');
const riseStep = +prompt('Введіть ступень')

function numberDegree(number, riseStep = 1) {
    if (typeof number != 'number')
        return 'Введіть коректні дані';
    if (typeof riseStep != 'number')
        return 'Введіть коректні дані';

    return number ** riseStep;
}

console.log(numberDegree())
alert(Math.pow(number, riseStep));

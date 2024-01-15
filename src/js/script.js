'use strict';

const padString = function ( string, length, symbol, right = true) {
    if (typeof string !== 'string') throw new Error ('це не являэться - string');
    if (typeof length !== 'number' || isNaN(length)) throw new Error ('тут повинно бути число, та не повинне бути NaN');

    if (string.length === length)  return string;
    if (string.length > length) return string.substring(0,length);

    if (typeof symbol !== 'string' || symbol.length !== 1) throw new Error ('рядок символу не повинен бути ширше за 1');
    if (typeof  right!=='boolean') throw new Error ('право повинно бути boolean');

    const symbols = symbol.repeat(length - string.length);
    return right ? string + symbols : symbols + string;
}

console.log(padString('hello',8,'*'));
console.log(padString('hello',6, '*', false));
console.log(padString('hello',2, '*'));

'use strict'


// Завданя 1
const runCallbacks = function (callbacks, value) {
    let result = value

    for (let i = 0; i < callbacks.length; i++) {
        const callback = callbacks[i]
        result = callback(result)
    }
    return result
}
const addOne = x => x + 1
const square = x => x * x
const callbacks = [addOne, square, addOne]
const result = runCallbacks(callbacks, 1)
console.log(result)

// Завдання 2

function composeFunctions(...functions) {
    return function(arg) {
        for (let i = functions.length - 1; i >= 0; i--) {
            arg = functions[i](arg);
        }
        return arg;
    };
}
const double = x => x * 2;
const square = x => x * x;
const negate = x => -x;
const composedFunction = composeFunctions(double, square, negate);
console.log(composedFunction(2));

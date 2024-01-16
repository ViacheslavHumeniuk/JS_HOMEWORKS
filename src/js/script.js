'use strict';

const arr = [1, 2, 3, -1, -2, -3];

function addArray(arr) {
    if (arr.length === 0) {
        throw new Error('Масив є порожній')
    }
    const result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) result.push(arr[i]);
    }
    return result.length === 0 ? null : result;
}

console.log(addArray(arr));
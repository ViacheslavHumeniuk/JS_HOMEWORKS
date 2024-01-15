'use strict';

const characters = 'qwertyuiop1234567890';
const length = 16;

function generateKey(length, characters) {
    let key = '';
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * characters.length);
        key += characters.charAt(random);
    }
    return key;
}

console.log(generateKey(length, characters));
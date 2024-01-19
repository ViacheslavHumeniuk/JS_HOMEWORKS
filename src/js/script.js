'use strict'

const getNumber = [];

function getRandomNumber (min, max)
{
    let randomNumber;
    do {
        randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    } while
        (getNumber.includes (randomNumber));
    getNumber.push(randomNumber);
    return randomNumber;
}

for (let i = 0; i <100; i++) {
    let newNumber = getRandomNumber (1,100);
    console.log (newNumber);
}
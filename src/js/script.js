'use strict';

const potatoWeight = 75;
const oneKilogramsPotatoPrice = 13;
const litersBorsch = 48;
const oneLiterPotato = 4;

function calculateSum(potatoWeight, litersBorsch, oneKilogramsPotatoPrice, oneLiterPotato) {
    const usingPotatoPerLiter = litersBorsch * oneLiterPotato; // 192
    const potatoKilograms = usingPotatoPerLiter * potatoWeight; // 14.400
    const potatoPrice = (potatoKilograms / 1000) * oneKilogramsPotatoPrice;
    return Math.floor(potatoPrice);
}

console.log(calculateSum(potatoWeight, litersBorsch, oneKilogramsPotatoPrice, oneLiterPotato));
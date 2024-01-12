'use strict';

const birthDate = Number(prompt("Введіть ваш рік народження"));
const city = prompt("Введіть у якому місті ви живите");
const favSport = prompt("Введіть який вид спорту є вашим улюбленим");
let age = 0;
let year = new Date().getFullYear();
let userCity = null;
let sport = null;

if (year - birthDate > 0) {
    age = new Date().getFullYear() - birthDate;
} else {
    age = 'шкода що ви не захотіли ввести ваш вік'
}


if (city === 'Kiev') {
    userCity = 'ти живеш у столиці: ' + 'України: ' + city;
} else if (city === 'Washington') {
    userCity = 'ти живеш у столиці: ' + 'США:  ' + city;
} else if (city === 'London') {
    userCity = 'ти живеш у столиці: ' + 'Англії: ' + city;
} else if (city === '') {
    userCity = 'ти живеш у місті: ' + ' ' + city;
} else {
    userCity = ' ' + 'шкода що ви не захотіли ввести своє місто';
}


if (favSport === 'Баскетбол') {
    sport = 'Круто! Хочеш стати' + ' ' + 'як Майкл Джордан' + "?"
} else if (favSport === 'Футбол') {
    sport = 'Круто! Хочеш стати' + ' ' + 'як Ліонель Мессі' + "?"
} else if (favSport === 'Бокс') {
    sport = 'Круто! Хочеш стати' + ' ' + ' як Майк Тайсон' + "?"
} else {
    sport = 'шкода що ви не захотіли ввести ваш улюблений вид спорту'
}

alert(`твій вік:  ${age} рік.\n${userCity}. улюблений вид спорту: ${favSport}. ${sport}`);
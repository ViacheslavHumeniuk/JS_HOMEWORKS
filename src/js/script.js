'use strict';

// # 1 Створити об'єкт student з властивостями name, age, та grade

const student = {
    name: "John",
    age: 20,
    grade: 75
};

// Вивести початкові дані
console.log("Початкові дані студента:", student);

// Змінити властивість grade об'єкта student
student.grade = 85;

// Додати нову властивість course до об'єкта student
student.course = "Mathematics";

// Вивести оновлені дані
console.log("Оновлені дані студента:", student);



// #2 Створити об'єкт book з властивостями title, author, та year
const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
};

// Додати вкладений об'єкт publisher з властивостями name та location
book.publisher = {
    name: "Scribner",
    location: "New York"
};

//  Вивести дані про книгу та видавця
console.log("Дані про книгу:", book);



// #3 Створити об'єкт movie з властивостями title, director, year, та genre
const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    genre: "Sci-Fi"
};

// Використати цикл for...in для виведення назв та значень всіх властивостей об'єкта movie
console.log("Інформація про фільм:");

for (let property in movie) {
    console.log(`${property}: ${movie[property]}`);
}



// #4 Створити об'єкт person1 з властивостями
const person1 = {
    name: "John",
    age: 25,
    city: "New York"
};

// Створити об'єкт person2 з властивостями (однаковими до person1)
const person2 = {
    name: "John",
    age: 25,
    city: "New York"
};

// Порівняти об'єкти за структурою
function areObjectsEqual(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }

    return true;
}

// Вивести результат порівняння об'єктів.
console.log("Чи об'єкти рівні за структурою?", areObjectsEqual(person1, person2))



// #5 Створити масив animals з об'єктами
const animals = [
    { type: "Dog", name: "Buddy" },
    { type: "Cat", name: "Whiskers" },
    { type: "Bird", name: "Tweety" }
];

// Вивести початковий масив animals
console.log("Початковий масив animals:", animals);

// Додати новий об'єкт до масиву animals.
let newAnimal = { type: "Fish", name: "Nemo" };
animals.push(newAnimal);

// Вивести оновлений масив animals
console.log("Оновлений масив animals:", animals);
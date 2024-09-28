"use strict";

let name = "Джон";
let admin = name;

alert(admin);

const city = prompt("Введите ваш город:");
const year = prompt("Введите год образование города:");
const population = prompt("Введите ваше население:");

let age_city = 2024 - year;

alert(`Городу ${city} исполнилось ${age_city}  лет с момента его образования. Население - ${population} человек`);

let radius = prompt('Введите радиус круга: ');

const square = 3.14 * (radius * radius);

alert(`Площадь круга равна ${square}`);

let one = parseFloat(prompt("Введите первое число:"));
let two = parseFloat(prompt("Введите второе число:"));

let sum = one + two;
let difference = one - two;
let particular = one / two;
let composition = one * two;

alert(`Сумма: ${sum}, разность: ${difference}, частное: ${particular}, произведение: ${composition}`);

console.log(sum);


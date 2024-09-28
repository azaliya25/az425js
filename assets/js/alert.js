'use strict';
alert("Я JavaScript");

const surname = prompt("Введите вашу фамилию:");
const name = prompt("Введите ваше имя:");
const patronymic = prompt("Введите ваше отчество:");

console.log("Фамилия: " + surname);
console.log("Имя: " + name);
console.log("Отчество: " + patronymic);
const isTrue = confirm("Верны ли ваши данные: " + surname + " " + name + " " + patronymic + "?");

console.log("Ответ пользователя: " + isTrue);
alert(isTrue);


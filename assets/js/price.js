"use strict";

function one() {
  let product_price = parseFloat(prompt("Введите стоимость товара: "));
  let money = parseFloat(prompt("Введите кол-во денег: "));

  if (isNaN(product_price) || isNaN(money) || product_price < 0 || money < 0) {
    alert("Неверный формат ввода. Введите положительные числа.");
  } else if (product_price === money) {
    alert("Покупка совершена!");
  } else if (product_price > money) {
    let price = product_price - money;
    alert(`Для покупки не хватает: ${price}р`);
  } else if (product_price < money) {
    let change = money - product_price;
    alert(`"Покупка совершена. Сдача ${change}р`);
  }
}

function two() {
  let num = parseFloat(prompt("Введите число:"));

  if (num > 0) {
    alert("1");
  } else if (num < 0) {
    alert("-1");
  } else {
    alert("0");
  }
}

function three() {
  let a = parseFloat(prompt("Введите число a:"));
  let b = parseFloat(prompt("Введите число b:"));
  let result = a + b < 4 ? "Мало" : "Много";
  alert(result);
}
function four() {
  let login = prompt("Введите логин:");
  let message =
    login == "Сотрудник"
      ? "Привет"
      : login == "Директор"
      ? "Здравствуйте"
      : "Нет логина";
  alert(message);
}

function five() {
  let login = prompt("Введите ваш логин: ");

  if (login === "Админ") {
    let password = prompt("Введите пароль: ");
    let message =
      password === "Я главный"
        ? "Здравствуйте!"
        : password === null || password === ""
        ? "Отменено"
        : "Неверный пароль";
    alert(message);
  } else if (login === null || login === "") {
    alert("Отменено");
  } else {
    alert("Я вас не знаю");
  }
}

// one();
two();
// three();
// four();
// five();

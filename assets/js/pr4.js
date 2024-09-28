"use strict";

function zd1() {
  let a = parseInt(prompt("Введите число a: "));
  let b = parseInt(prompt("Введите число b: "));

  if (a > b) {
    [a, b] = [b, a];
  }

  for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
      alert(i);
    }
  }
}

function zd2() {
  let i = parseInt(prompt("Введите число i: "));
  while (i < 3) {
    alert(`number ${i}!`);
    i++;
  }
}

function zd3() {
  let number;

  do {
    number = prompt("Введите число, большее 10:", 0);
  } while (number !== null && number <= 10);
  {
    alert("Спасибо!");
  }
}

function zd4() {
  let a = parseInt(prompt("Введите число a: "));
  let b = parseInt(prompt("Введите число b: "));

  alert(`Меньшее число:${a < b ? a : b}`);
}

function zd5() {
  const ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
  };

  ask(
    "Вы согласны?",
    () => alert("Вы согласились."),
    () => alert("Вы отменили выполнение.")
  );
}

function zd6() {
  let age = parseInt(prompt("Введите ваш возраст: "));

  const checkAge = (age) => age > 18 || confirm("Родители разрешили?");
  const checkAge2 = (age) => (age > 18 ? true : confirm("Родители разрешили?"));

  checkAge();
}


zd1();
zd2();
zd3();
zd4();
zd5();
zd6();

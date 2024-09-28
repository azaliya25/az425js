function zd1() {
  let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130,
  };

  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }

  console.log(sum);
}

function zd2() {
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "number") {
        obj[key] *= 2;
      }
    }
  }

  let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };

  multiplyNumeric(menu);
  console.log(menu);
}

function zd3() {
  let calculator = {
    read() {
      this.a = +prompt("Введите первое число:", 0);
      this.b = +prompt("Введите второе число:", 0);
    },
    sum() {
      return this.a + this.b;
    },
    mul() {
      return this.a * this.b;
    },
  };

  calculator.read();
  alert(calculator.sum());
  alert(calculator.mul());
}

function zd4() {
  function extractCurrencyValue(str) {
    return +str.slice(1);
  }

  console.log(extractCurrencyValue("$120"));
}

function zd5() {
  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];

  let names = users.map((user) => user.name);

  console.log(names);
}

function zd6() {
  function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
  }

  let vasya = { name: "Вася", age: 25 };
  let petya = { name: "Петя", age: 30 };
  let masha = { name: "Маша", age: 28 };

  let users = [vasya, petya, masha];

  console.log(getAverageAge(users));
}

zd1();
zd2();
zd3();
zd4();
zd5();
zd6();

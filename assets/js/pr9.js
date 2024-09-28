let form = document.forms.form;
let name = form.name;
let year = form.year;

let date = new Date();

let nameErrorTxt = document.querySelector("#nameError");
let yearErrorTxt = document.querySelector("#yearError");

form.addEventListener("submit", () => {
  event.preventDefault();
  nameErrorTxt.innerHTML = "";
  yearErrorTxt.innerHTML = "";
  let errorMessageName = [];
  let errorMessageYear = [];
  let flagName = false;
  let flagYear = false;

  if (!name.value) {
    flagName = true;
    errorMessageName.push("Поле пустое");
  } else if (name.value.length < 2) {
    flagName = true;
    errorMessageName.push("Длина имени меньше 2");
  }
  if (!year.value) {
    flagYear = true;
    errorMessageYear.push("Поле года пусто");
  } else if (year.value.length != 4) {
    flagYear = true;
    errorMessageYear.push("Год некоректен");
  } else if (date.getFullYear - +year.value <= 18) {
    flagYear = true;
    errorMessageYear.push("нет 18 лет");
  }

  if (flagName) {
    nameErrorTxt.innerHTML = errorMessageName;
    nameErrorTxt.classList.add("active");
  } else {
    nameErrorTxt.classList.remove("active");
  }

  if (flagYear) {
    yearErrorTxt.innerHTML = errorMessageYear;
    yearErrorTxt.classList.add("active");
  } else {
    yearErrorTxt.classList.remove("active");
  }

  if (!flagName && !flagYear) {
    alert("Гуд");
  }
});

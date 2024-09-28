function zd1() {
  let div = document.querySelector("div");
  console.log(div);

  let ul = document.querySelector("ul");
  console.log(ul);

  let secondLi = document.querySelectorAll("li")[1];
  console.log(secondLi);
}
function zd2() {
  let listItems = document.querySelectorAll("li");
  listItems.forEach((li) => li.classList.add("list-item"));

  console.log(listItems);
}
function zd3() {
  let numberOfBlocks = prompt("Введите количество блоков:", 0);
  numberOfBlocks = parseInt(numberOfBlocks);

  for (let i = 0; i < numberOfBlocks; i++) {
    let block = document.createElement("div");
    block.textContent = `Блок ${i + 1}`;
    document.body.appendChild(block);
  }
}

zd1();
zd2();
zd3();

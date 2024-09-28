document.getElementById("clickButton").addEventListener("click", function () {
    this.style.backgroundColor = "yellow";
    setTimeout(() => this.style.backgroundColor = "", 300);
});

document.getElementById("hoverButton").addEventListener("mouseover", function () {
    this.style.backgroundColor = "lightgreen";
});
document.getElementById("hoverButton").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
});

document.getElementById("dblClickButton").addEventListener("dblclick", function () {
    this.style.backgroundColor = "orange";
    setTimeout(() => this.style.backgroundColor = "", 300);
});


document.addEventListener("keydown", function (event) {
    const body = document.body;
    const key = event.key.toLowerCase();

    if (key === 'r') {
        body.style.backgroundColor = "red";
    } else if (key === 'g') {
        body.style.backgroundColor = "green";
    } else if (key === 'b') {
        body.style.backgroundColor = "blue";
    }
});

document.addEventListener("keyup", function (event) {
    const key = event.key.toLowerCase();

    if (key === 'r' || key === 'g' || key === 'b') {
        document.body.style.backgroundColor = "";
    }
});


const block = document.getElementById("movableBlock");
let topPos = 100;
let leftPos = 100;

document.addEventListener("keydown", function (event) {
    const key = event.key.toLowerCase();

    if (key === 'w') {
        topPos -= 1;
    } else if (key === 's') {
        topPos += 1;
    } else if (key === 'a') {
        leftPos -= 1;
    } else if (key === 'd') {
        leftPos += 1;
    }

    block.style.top = `${topPos}px`;
    block.style.left = `${leftPos}px`;
});

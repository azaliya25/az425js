document.getElementById("toggleButton").addEventListener("click", function() {
    const textDiv = document.getElementById("text");
    if (textDiv.style.display === "none") {
        textDiv.style.display = "block";
    } else {
        textDiv.style.display = "none";
    }
});


document.body.addEventListener("click", function(event) {
    const ball = document.getElementById("ball");
    const ballSize = ball.offsetWidth;

    const x = event.clientX - ballSize / 2;
    const y = event.clientY - ballSize / 2;

    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;

    ball.style.transition = "left 0.5s, top 0.5s";
});

const colorBlock = document.getElementById('colorBlock');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');

let colorInterval;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


startBtn.addEventListener('click', () => {
    
    colorInterval = setInterval(() => {
        colorBlock.style.backgroundColor = getRandomColor();
    }, 500);

    startBtn.disabled = true;
    stopBtn.disabled = false;
});


stopBtn.addEventListener('click', () => {
    clearInterval(colorInterval);

    startBtn.disabled = false;
    stopBtn.disabled = true;
});

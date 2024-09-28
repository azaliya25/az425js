document.getElementById("dropdownButton").addEventListener("click", function() {
    const menu = document.getElementById("dropdownMenu");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "block";
        menu.style.maxHeight = menu.scrollHeight + "px";
    } else {
        menu.style.maxHeight = "0";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
    }
});


document.addEventListener("click", function(event) {
    const button = document.getElementById("dropdownButton");
    const menu = document.getElementById("dropdownMenu");

    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.maxHeight = "0";
        setTimeout(() => {
            menu.style.display = "none";
        }, 300);
    }
});

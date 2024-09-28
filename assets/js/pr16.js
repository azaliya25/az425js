const phonePopup = document.getElementById('phonePopup');
const closeBtn = document.getElementById('closeBtn');

function showPhonePopup() {
    phonePopup.style.display = 'block';
}

function hidePhonePopup() {
    phonePopup.style.display = 'none';
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
         
            showPhonePopup();
            observer.disconnect();
        }
    });
}, {
    threshold: 0.5
});

const thirdSection = document.querySelector('.section:nth-child(3)');
observer.observe(thirdSection);

closeBtn.addEventListener('click', hidePhonePopup);

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');


function showSlide(index) {
 
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

document.getElementById('prev').addEventListener('click', function() {
    showSlide(currentSlide - 1);
});

document.getElementById('next').addEventListener('click', function() {
    showSlide(currentSlide + 1);
});

dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-slide'));
        showSlide(slideIndex);
    });
});

showSlide(currentSlide);

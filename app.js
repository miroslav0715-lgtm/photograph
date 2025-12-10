// Слайдер
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
}

function updateSlider() {
    slides.forEach((slide, index) => {
        slide.style.display = index === slideIndex ? 'block' : 'none';
    });
}

updateSlider();

// Полноэкранный режим
function openFullscreenImage(element) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImage = document.getElementById('fullscreen-image');
    fullscreenImage.src = element.src;
    fullscreenContainer.style.display = 'block';
}

function closeFullscreenImage() {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    fullscreenContainer.style.display = 'none';
}

// Кнопка "Наверх"
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    const button = document.getElementById('scrollToTopButton');
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

document.getElementById('scrollToTopButton').addEventListener('click', function() {
    scrollToTop();
});

function scrollToTop() {
    const scrollStep = -window.scrollY / 15;
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}
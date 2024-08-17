// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Back to Top Button functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Image Carousel functionality
let currentIndex = 0;

const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.classList.toggle('active', i === index);
    });
}

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
});

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showItem(currentIndex);
});

// Initialize carousel
showItem(currentIndex);

// Interactive FAQs functionality
document.querySelectorAll('.faq h3').forEach(question => {
    question.addEventListener('click', () => {
        question.nextElementSibling.classList.toggle('active');
    });
});

// Smooth scrolling for buttons
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

// Reveal elements on scroll
const elementsToShow = document.querySelectorAll('section');
const revealOnScroll = () => {
    elementsToShow.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

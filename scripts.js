// Script for Scroll Animations
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(function(element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});

// Scroll to Top Button Functionality (Optional)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = '↑';
scrollToTopButton.style.position = 'fixed';
scrollToTopButton.style.bottom = '30px';
scrollToTopButton.style.right = '30px';
scrollToTopButton.style.backgroundColor = '#00b894';
scrollToTopButton.style.color = '#fff';
scrollToTopButton.style.border = 'none';
scrollToTopButton.style.padding = '10px 15px';
scrollToTopButton.style.borderRadius = '50%';
scrollToTopButton.style.fontSize = '20px';
scrollToTopButton.style.cursor = 'pointer';
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// script.js

window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.movie-section');
    
    parallaxElements.forEach(function (element) {
        const scrollPosition = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        // Adjust background position based on scroll
        element.style.backgroundPosition = `center ${-(scrollPosition * parallaxSpeed)}px`;
    });
});
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollToTopBtn = document.getElementById('scroll-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Toggle dark mode
const toggleDarkModeBtn = document.getElementById('toggle-dark-mode');

toggleDarkModeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleDarkModeBtn.innerText = document.body.classList.contains('dark-mode') ? 'Light Mode' : 'Dark Mode';
});

// Show the dark mode button on page load
document.addEventListener('DOMContentLoaded', () => {
    toggleDarkModeBtn.style.display = 'block';
});

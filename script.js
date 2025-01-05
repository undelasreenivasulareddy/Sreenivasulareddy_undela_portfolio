// Toggle Menu for Small Screens
function toggleMenu() {
    const nav = document.querySelector('nav ul');
    const toggle = document.querySelector('.menu-toggle');
    nav.classList.toggle('active');
    toggle.classList.toggle('active');
}

// Toggle Theme
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Initialize theme from localStorage or default to dark
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
themeToggle.innerHTML = savedTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    themeToggle.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

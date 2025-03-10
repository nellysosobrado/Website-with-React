import AOS from 'aos';
import 'aos/dist/aos.css';

// Hitta switch-elementet
const darkModeToggle = document.querySelector('.switch input[type="checkbox"]');

// Funktion för att sätta theme
function setTheme(isDark) {
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
}

// Lyssna på ändringar i switch-knappen
darkModeToggle.addEventListener('change', (e) => {
    setTheme(e.target.checked);
});

// Kontrollera om användaren tidigare valt dark mode
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    darkModeToggle.checked = true;
    setTheme(true);
}

AOS.init(); 
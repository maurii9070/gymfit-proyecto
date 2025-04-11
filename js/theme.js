// Initialize theme
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.body.className = savedTheme;
    updateThemeIcon(savedTheme);
}

// Toggle theme
function toggleTheme() {
    const currentTheme = document.body.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
}

// Update theme icon
function updateThemeIcon(theme) {
    const icon = document.querySelector('.theme-icon');
    if (icon) {
        // Animación de desvanecimiento
        icon.style.opacity = '0';
        icon.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            icon.textContent = theme === 'dark' ? '☀️' : '🌙';
            icon.style.opacity = '1';
            icon.style.transform = 'scale(1)';
        }, 150);
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});
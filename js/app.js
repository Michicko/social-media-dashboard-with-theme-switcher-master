const toggle = document.querySelector('.header__checkbox');




document.addEventListener('DOMContentLoaded', () => {
    let currentTheme = getTheme();
    if (currentTheme === 'light') {
        toggle.checked = true;
        document.documentElement.setAttribute('data-theme', 'light');
        saveTheme('light');
    } else {
        toggle.checked = false;
    }
});

toggle.addEventListener('change', switchMode);

// switch between dark and light
function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        saveTheme('light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        saveTheme('dark');
    }
}

// get saved theme
function getTheme() {
    let theme;
    if (localStorage.getItem('theme') === null) {
        theme = null;
    } else {
        theme = localStorage.getItem('theme');
    }
    return theme;
}


// save theme to storage
function saveTheme(mode) {
    let theme = getTheme();
    theme = mode;
    localStorage.setItem('theme', theme);
}
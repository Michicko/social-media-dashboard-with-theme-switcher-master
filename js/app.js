const toggle = document.querySelector('.header__checkbox');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;


toggle.addEventListener('change', switchMode);

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
}

// check for saved theme
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'light') {
        toggle.checked = true;
    }
}

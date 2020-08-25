const toggle = document.querySelector('.header__checkbox');


toggle.addEventListener('change', switchMode);

function switchMode(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
}

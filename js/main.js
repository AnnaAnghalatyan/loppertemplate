const scrollBtn = document.getElementById('scroll-down');
const menuToggler = document.querySelector('.header__toggler ');
const overlay = document.querySelector('.header__menu-overlay');
const menuLinks = [...document.querySelectorAll('.header__menu-link')];

const menu = document.querySelector('.header__menu');

scrollBtn.onclick = function (e) {
    const h = window.innerHeight;
    window.scrollTo(0, h);
}

function openMenu() {
    menu.classList.add('toggled');
    document.body.classList.add('scroll-off');
    overlay.classList.add('fade')
}

function closeMenu() {
    menu.classList.remove('toggled');
    document.body.classList.remove('scroll-off');
    overlay.classList.remove('fade')
}

menuToggler.onclick = function (e) {
    openMenu();
}

overlay.onclick = () => closeMenu()

menuLinks.forEach(link => link.addEventListener('click', function () {
    closeMenu();
}))
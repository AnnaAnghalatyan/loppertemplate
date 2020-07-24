const scrollBtn = document.getElementById('scroll-down');
const menuToggler = document.querySelector('.header__toggler ');
const overlay = document.querySelector('.header__menu-overlay');
const menuLinks = [...document.querySelectorAll('.header__menu-link')];
const navbar = document.querySelector('.header__navbar');
let menuClosed = true;

const menu = document.querySelector('.header__menu');

if (scrollBtn) scrollBtn.onclick = function (e) {
    const h = window.innerHeight;
    const navHeight = navbar.offsetHeight;
    window.scrollTo(0, h - navHeight);
}

window.addEventListener('scroll', function () {
    this.scrollY > 100 ?
        navbar.classList.add('purple') :
        navbar.classList.remove('purple')

})

function openMenu() {
    menuClosed = false;
    menu.classList.add('toggled');
    document.body.classList.add('scroll-off');
    overlay.classList.add('fade')
}

function closeMenu() {
    menuClosed = true;
    menu.classList.remove('toggled');
    document.body.classList.remove('scroll-off');
    overlay.classList.remove('fade')
}

if(menuToggler) menuToggler.onclick = function (e) {
    menuClosed ? openMenu() : closeMenu();
}

if(overlay) overlay.onclick = () => closeMenu()

if(menuLinks) menuLinks.forEach(link => link.addEventListener('click', function () {
    closeMenu();
}))
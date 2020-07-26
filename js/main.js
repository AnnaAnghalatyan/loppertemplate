const scrollBtn = document.getElementById('scroll-down');
const menuToggler = document.querySelector('.menu__toggler ');
const menuLinks = [...document.querySelectorAll('.menu__link')];
const navbar = document.querySelector('.menu__fixed');
let menuClosed = true;
const header = document.querySelector('.header');

const menu = document.querySelector('.menu__items');

if (scrollBtn) scrollBtn.onclick = function (e) {
    const h = window.innerHeight;
    const navHeight = navbar.offsetHeight;
    window.scrollTo(0, h - navHeight);
}

window.addEventListener('scroll', function () {
    if(this.scrollY > 100) {
       navbar.classList.add('purple')
    } else {
        navbar.classList.remove('purple')
    }
})

function openMenu() {
    menuClosed = false;
    menu.classList.add('toggled');
    menuToggler.classList.add('white')
}

function closeMenu() {
    menuClosed = true;
    menu.classList.remove('toggled');
    menuToggler.classList.remove('white')
}

if(menuToggler) menuToggler.onclick = function (e) {
    menuClosed ? openMenu() : closeMenu();
}

if(menuLinks) menuLinks.forEach(link => link.addEventListener('click', function () {
    closeMenu();
}))
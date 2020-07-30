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

function typingTextAnimation() {
    let text1 = "We grow";
    let text2 = "great business";
    const text1Block = document.getElementById('text1');
    const text2Block = document.getElementById('text2');


    function InsertLetters(block, initialText) {
        let text = '';
        let interval = setInterval(function () {
            text += initialText.charAt(text.length);
            block.innerHTML = text;
            if(text.length === initialText.length) clearInterval(interval)
        }, 120)

    }
    InsertLetters(text1Block, text1);
    setTimeout(function () {
        InsertLetters(text2Block, text2);
    }, text1.length * 120)
}

window.onload = function () {
    typingTextAnimation()
}

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
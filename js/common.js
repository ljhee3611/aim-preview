// Mobile Menu Popup
const menuBtn = document.querySelector('.header__mobile__menu');
const menuCloseBtn = document.querySelector('.header__mobile__menu__close');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', function(){
    nav.style.display = 'flex';
});
menuCloseBtn.addEventListener('click', function(){
    nav.style.display = 'none';
});

window.addEventListener('resize', function () {
    if (window.innerWidth >= 1200) {
        nav.style.display = 'flex';
    } else {
        nav.style.display = 'none';
    }
})
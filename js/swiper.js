// Main Visual Cards
var swiper = new Swiper(".mainSlider", {
    effect: "cards",
    grabCursor: false,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".mainSlider-next",
        prevEl: ".mainSlider-prev",
    },
    on: {
        afterInit: function () {                
            const swiperNowImage = document.querySelector('.swiper-slide.swiper-slide-active img').src;

            const mainBox = document.querySelector('.mainSlider__background');
            mainBox.style.backgroundImage = `url(${swiperNowImage})`;
        },
    },
});

swiper.on('slideChangeTransitionEnd', function () {
    const swiperElement = swiper.el;
    const swiperElementActive = swiperElement.querySelector('.swiper-slide.swiper-slide-active');
    const swiperNowImage = swiperElementActive.querySelector('img').src;

    const mainBox = document.querySelector('.mainSlider__background');
    mainBox.style.backgroundImage = `url(${swiperNowImage})`;
});

// Main Art Slider
var swiper2 = new Swiper(".AIM__collection", {
    navigation: {
        nextEl: ".AIM__collection-next",
        prevEl: ".AIM__collection-prev",
    },
});

// Main BAYC Shop
var swiper3 = new Swiper(".bayc__shop", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".bayc__shop__pagination",
        clickable: true,
    },
});

// Main BAYC Marquee top
let SwiperTop = new Swiper('.marquee--top', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
    },
    loop: true,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});

// Main BAYC Marquee bottom
let SwiperBottom = new Swiper('.marquee--bottom', {
    spaceBetween: 0,
    centeredSlides: true,
    speed: 6000,
    autoplay: {
        delay: 1,
        reverseDirection: true
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView:'auto',
    allowTouchMove: false,
    disableOnInteraction: true
});
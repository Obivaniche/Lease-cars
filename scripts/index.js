const swiper = new Swiper(".slider", {
    effect: 'fade',
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
});

// Slick parameters
$(document).ready(function(){
    $('.rooms__items').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $(".room__left"),
        nextArrow: $(".room__right"),
        dotsClass: 'dots',
        appendDots: $('.room__navigation')
    });

    const button1 = document.querySelector('#slick-slide-control00'),
        button2 = document.querySelector('#slick-slide-control01'),
        button3 = document.querySelector('#slick-slide-control02');

    button1.textContent = '';
    button2.textContent = '';
    button3.textContent = '';
});
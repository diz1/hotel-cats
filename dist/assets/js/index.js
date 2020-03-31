
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

    $('.feedback-items').slick({
        dots: true,
        slidesToShow: 2.5,
        slidesToScroll: 1,
        prevArrow: $(".feed__left"),
        nextArrow: $(".feed__right"),
        dotsClass: 'dots',
        appendDots: $('.feed__navigation')
    });

    const button1 = document.querySelector('#slick-slide-control00'),
    button2 = document.querySelector('#slick-slide-control01'),
    button3 = document.querySelector('#slick-slide-control02'),
    button4 = document.querySelector('#slick-slide-control10'),
    button5 = document.querySelector('#slick-slide-control11'),
    button6 = document.querySelector('#slick-slide-control12');
    button1.textContent = '';
    button2.textContent = '';
    button3.textContent = '';
    button4.textContent = '';
    button5.textContent = '';
    button6.textContent = '';
});
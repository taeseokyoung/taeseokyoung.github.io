$(function () {

    $('.slide01 .main_slider').slick({
        arrows: false,
        dots: true,
        centerMode: true,
        centerPadding: '250px',
    });

    $('.slide01 .slide_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    });
    $('.slide01 .slide_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    });


})
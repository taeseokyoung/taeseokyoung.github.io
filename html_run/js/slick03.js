$(function () {
    // 변수 = 0을 할당한다.
    var createNum = 0;

    // 위치를 위로 옮기면 슬릭이 만들어졌을 때 작동하세요~
    // current slide는 0 1 2 
    $('.main_slider').on('init afterChange', function (e, s, c) {
        // .slick-current 대상을 더 정확하게 특정
        $('.main_slider figure.slick-current').addClass('on').siblings().removeClass('on');
        // $('.num').css({ backgroundPositionY: -100 * c + "px" })
        $('.num').css({ backgroundPositionY: -100 * c + "px" });
        $('.custom_dots li').eq(c).addClass('on').siblings().removeClass('on');

        // createNum = createNum + 1;
        createNum++;
    });

    $('.main_slider').slick({
        arrows: false,
        autoplay: true,
        pasueOnHover: false,
        pasueOnFocus: false,
        autoplaySpeed: 3000,
    });

    $('.custom_dots a').on('click', function (e) {
        e.preventDefault();
        // 번호를 받아올 때 idx
        var idx = $(this).parent().index();
        $('.main_slider').slick('slickGoTo', idx);
        $('.num').css({ backgroundPositionY: -100 * idx + "px" });
    })

    $('.custom_arrows i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPrev')
    })
    $('.custom_arrows i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickNext')
    })
    $('.custom_play i:nth-child(1)').on('click', function () {
        $('.main_slider').slick('slickPause')
    })
    $('.custom_play i:nth-child(2)').on('click', function () {
        $('.main_slider').slick('slickPlay')
    })
})


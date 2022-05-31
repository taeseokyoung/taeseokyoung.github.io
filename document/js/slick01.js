$(function () {

    $('.main_slider').on('init reInit afterChange', function (e, s, c) {
        console.log(e, s, c);
        $('.num').text((c ? c + 1 : 1) + "/" + s.slideCount);
        let cur = $('.slick-current');
        cur.addClass('xx').siblings().removeClass('xx')
    })

    $('.main_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

})
// init reInit : 시작할 때부터 적용해!
        // event, slick, currentSlide
                // c가 있으면 c + 1 아니면 1
                 // console.log(cur)
$(function () {
    // init :   
    // event slick currentslide
    // html에 ul아래 nthchild 1에게만 on을 먼저 붙여줬다. 
    // 아마도 아래 if문에서 1을 먼저 써준 것과 같은 이유?
    $('.main_slider').on('init afterChange', function (e, s, c) {
        console.log(e, s, c)
        $('.slide01 .box .num').text("0" + (c ? c + 1 : 1) + "/" + "0" + s.slideCount)
        $('.slide01 .content>li').eq(c).addClass('on').siblings().removeClass('on');
    });
    // 이렇게 만들면 0이 아니고 10이 될때부터는 어떻게해???

    $('.main_slider').slick({
        // 버튼을 없애고 따로 만들어서쓸거기때문에
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

    $('.left_slider').slick({
        arrows: false,
        fade: true,
    });

    $('.right_slider').slick({
        arrows: false,
        slidesToShow: 4,
        asNavFor: '.left_slider',
    });


    $('.slide02 .right i:nth-child(1)').on('click', function () {
        $('.right_slider').slick('slickPrev')
    });
    $('.slide02 .right i:nth-child(2)').on('click', function () {
        $('.right_slider').slick('slickNext')
    });
})
// 중괄호 객체
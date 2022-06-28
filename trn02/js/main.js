$(function () {

    $('.topBanner i').on('click', function () {
        $('.topBanner').slideUp();
    });

    $('.mainSlider').on('init afterChange', function (e, s, c) {
        var current = $('.slick-current');
        current.addClass('on').siblings().removeClass('on');
        $('.mainArrow i').removeClass('on');
        // console.log(c + 1)
        // console.log(s);

        // if (c) {
        //     c = c + 1;
        // } else {
        //     c = 1;
        // }
        if (c === 1) {
            $('.mainArrow i').addClass('on')
        }
        $('.slideNum').text((c ? (c + 1) : 1) + " / " + s.slideCount);
    });

    $('.mainSlider').slick({
        arrows: false,
        // autoplay: true,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.mainArrow i:nth-child(1)').on('click', function () {
        $('.mainSlider').slick('slickPrev')
    });

    $('.mainArrow i:nth-child(2)').on('click', function () {
        $('.mainSlider').slick('slickNext')
    });


    $('#ytb').YTPlayer({
        videoURL: 'https://youtu.be/BhYzn2B_S8E',
        containment: '.ytb',
        autoPlay: true,
        mute: true,
        startAt: 0,
        opacity: 1,
        showControls: false,
        playOnlyIfVisible: true,

    });

    $('.ytb .zoom').on('click', function (e) {
        // 이벤트 버블링, 이벤트 전파 막는?
        e.preventDefault();
        $('#ytb').YTPFullscreen();
    });

    $('.productSlider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        centerMode: true,
    });
    $('.product .productArrows i:nth-child(1)').on('click', function () {
        $('.productSlider').slick('slickPrev')
    })

    $('.product .productArrows i:nth-child(2)').on('click', function () {
        $('.productSlider').slick('slickNext')
    })

    $('.tab_menu li').on('click', function (event) {
        event.preventDefault();
        // console.log($(this), $(this).index(), event.target, event.currentTarget);
        $('.tab_menu li').removeClass('on');
        $(this).addClass('on');
        //$(this) '.tab_menu li' event.currentTarget
        var idx = $(this).index(); // class붙이는거랑 같은거 0,1,2
        // css에서 해준 일과 같다 display none block 해준거와 같은거
        $('.tab_content>div').removeClass('on')
        $('.tab_content>div').eq(idx).addClass('on').siblings().removeClass('on')
        //eq(idx) 는 몇번째놈(nthchild와 연동) 

        $('.right_content>li').removeClass('on');
        $('.right_content>li').eq(idx).addClass('on');
    })

    // event.target 이벤트타겟(항상 가장 아래에 있는 것) .tab_menu li 커런트타겟
    // index, event, 이벤트 위임, select toggle(참과 거짓)

    // var ux = "떠경"

    $('.tab_content .notice li').on('click', function (event) {
        event.preventDefault();
        var idx = $(this).index();
        $('.right_content>li').removeClass('on');
        $('.right_content>li').eq(idx).addClass('on');
        console.log(ux)

    });
    // 함수안에서 밖을 볼 수 있고(밖의 값 가져올 수 있다.) 밖에서는 안을 볼 수 없다.(안의 값을 가져올 수 없다.) 스코프 또는 함수의 클로즈

    // console.log(idx)

});



$('.toTop').on('click', function () {
    $('html,body').animate({ scrollTop: 0 }, 200)
});

$(window).on('scroll', function () {
    var sct = $(window).scrollTop();
    // console.log(sct)

    if (sct > 500) {
        $('.toTop').fadeIn(300)//show()
    }
    else {
        $('.toTop').fadeOut(1000)//hide()
    }
    // if (sct > 500) {
    //     console.log('나와랏')
    // }

    // else {
    //     console.log('드가랏')
    // }

    $('#fl').on('change', function () {
        console.log($(this), $(this).val())
        var lnk = $(this).val();
        // lnk && window.open(lnk) - 리액트에서 쓸거야
        // if문 뒤에 {} 생략해두되네?
        if (lnk) { window.open(lnk); }


    })




})



$(function () {

    $('.visual_slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });

    $('.slider').slick({
        autoplay: true,
        arrows: false,
        // 버튼을 없앤다.
        autoplaySpeed: 4000,
        // 1초 1000 
        dots: true,
        // 도트라는 버튼을 나오게 한다.
        pauseOnHover: false,
    });

    $('.slider02').slick({
        slidesToShow: 3,
    });
    // 같은숫자로 만들면 안돌아간다??
});

// $(function () {}) dom이 완성되면 실행 


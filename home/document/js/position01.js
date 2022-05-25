$(function () {
    $('ul').click(function () {
        var angle = $(this).index();
        $('ul>li').css('transform', 'rotate(45deg)');
    })
})

//함수 문제점 : 0도 안먹힘  45도는 눈만 돌아감

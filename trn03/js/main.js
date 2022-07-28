$(function () {

    // $('.TopBanner i').on('click', function () {
    //     $('.TopBanner').hide();
    // });

    // 팝업창이 슬라이드처럼 올라간다 (기준에 따라 슬라이드되는 경로가 달라지겠지?)
    $('.TopBanner i').on('click', function () {
        $('.TopBanner').slideUp();
    });


    // 팝업창이 하나하나 닫히게 하는 방법 1. 아래 구문을 5개만들어준다.
    // $('.pop01 button').on('click',function(){
    //     $('.pop01').hide(); })

    //팝업창이 하나하나 닫히게 하는 방법 2. this
    $('.pop button').on('click', function () {
        $(this).parent().hide();
    })


    // 팝업창이 한꺼번에 닫히게 한다
    $('.pop button').on('click', function () {
        $('.pop').hide();
    })

})

// 팝업창이 여러개가 떴을 때 this parent parent 가 닫히
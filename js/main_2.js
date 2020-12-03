/* 1 */
$(function () {
    //1. 스크롤 나오고 사라지게 하는 범위 정하기


    var top;
    var i = 0;
    $(window).on('mousewheel DOMMouseScroll', nav);
    function nav(e) {
        top = $(window).scrollTop();
        var offsetArr = [],
            imgTop;

        if (top > $('.who_top').children('p').offset().top && top < $('.main_5_1, .story').offset().top - 100) {
            $('.side_le').css({
                'right': 'calc(25px + 55 * ((100vw - 320px) / 1600))'
            });
            if(window.innerHeight<1300){
                 $('.side_le').css({
                'right': '2%'
            });
            }
        } else {
            $('.side_le').css({
                'right': '-100px'
            });

        }



        /* 2. 스크롤 내리고 올리기*/
        if (e.originalEvent.wheelDelta < 0 || e.originalEvent.detail > 0 ) {
            if (i <= -1) {
               i+=2;
            } else {
                i += 2;
            }

        } else {
            i -= 2;
        }
     
        console.log(i)
        $('.side_le_2 span').css({
            'margin-top': i + 'px'
        });

    }

});

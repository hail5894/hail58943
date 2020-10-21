/* 1 */
$(function () {
    //1. 스크롤 나오고 사라지게 하는 범위 정하기
    $('.side_le').css({
        'left': '-100px'
    });

    var top;
    var i = 0;

    function nav(e) {
        top = $(window).scrollTop();
        var offsetArr = [],
            imgTop;

        if (top > $('.spotH').offset().top + 100 && top < $('.not_title').offset().top - 100) {
            $('.side_le').css({
                'left': 'calc(25px + 55 * ((100vw - 320px) / 1600))'
            });

        } else {
            $('.side_le').css({
                'left': '-100px'
            });

        }



        /* 2. 스크롤 내리고 올리기*/

        if (e.originalEvent.wheelDelta < 0) {
            if (i <= -1) {
               i+=2;
            } else {
                i += 2;
            }

        } else {

            i -= 2;
        }
        //Our VISUAL 움직이기
        if (top < $('.visual').offset().top) {
            $('.vis_1-1 h2').css({
                'transform': 'translateX(' + i + '%)',
                'transition': '.2s'

            });
        }


        $('.side_le_2 span').css({
            'margin-top': i + 'px'
        });

    }
    $(window).on('mousewheel', nav);

});

//3. 버튼 css
$(function () {
    //1
    $('.bot').mouseenter(function () {
        $(this).css({
            'backgroundColor': '#aa8768',
            'transition': '.7s'

        });
        $(this).children('a').css({
            'color': '#fff'
        });
    });
    $('.bot').mouseleave(function () {
        $(this).css({
            'backgroundColor': '#0c0c0c',
            'font-weight': '600'
        });
        $(this).children('a').css({
            'color': '#aa8768'
        });
    });

    //2
    $('.discover, .side a').mouseenter(function () {
        $(this).css({
            'backgroundColor': '#f0f0f0',
            'transition': '.7s',
            'color': '#aa8768',
            'font-weight': 'bold',
            'overflow': 'hidden',
        });


        setTimeout(function () {
            $('.discover i').fadeIn();
            $('.discover i').css({
                'transform': 'translateX(80%)',
                'transition': '.5s'
            });
        }, 200);

    });
    $('.discover, .side a').mouseleave(function () {
        $(this).css({
            'backgroundColor': '#aa8768',
            'transition': '.7s',
            'color': '#fff'
        });


        $('.discover i').css({
            'transform': 'translateX(-5px)',
            'transition': '.5s'
        });


    });

});


//4.작품개요/시놉시스 css
$(function () {
    $('.me_1').mouseenter(function () {
        $(this).children('img').css({
            'opacity': '.9',
            'transition': '.7s',
            'background-image': 'linear-gradient(rgba(12, 12, 12, 0), rgb(12, 12, 12))'
        });

    });


    $('.me_1').mouseleave(function () {
        $(this).children('img').css({
            'opacity': '.2',
            'transition': '.7s'
        });


    });
    //end
});



//5. notice 관련
$(function () {
    //start
    $('.not_1').draggable({ axis: "x"});
    // /mouseenter
    $('.not_1-1').mouseenter(function () {
        $(this).children('span').fadeIn(400);
        $(this).children('span').css({
            'display': 'flex',
            'transition':'.7'
        });
        $(this).children('.not_main').children('p').children('img').attr('src','img/main/not_1_1.jpg'); 
   
    });
    //mouseleave
    $('.not_1-1').mouseleave(function () {
        $(this).children('span').fadeOut(100);
        $(this).children('span').css({
            'transition':'.7'
            
        });
        $(this).children('.not_main').children('p').children('img').attr('src','img/main/not_1.jpg');
       
    });

    //btn
    var idx=0;
    //처음에 부드럽게 이동하기 위해 눈속임
    $('.not_1').css({
        'left' : '0px',
        'transition':'1s'
    });

    $('.drag_2 a').on('click',function(e){
        e.preventDefault();
        if($(this).index()==0){
            idx+=300;
        }else{
            idx-=300;
        }

        $('.not_1').css({
            'left' : idx +'px',
            'transition':'1s'
        });


    });
   
    //end
});

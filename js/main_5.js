$(function () {
    //1


    $('.view_1 i').removeClass('active');
    $('.view_2').slideDown();
    $('.view_1 i').on('click', function () {
        
        $('.view_1 i').toggleClass('active');
        $('.view_2').slideToggle();
        $('.side_map').toggleClass('active');
       
    });
    
    

    //2
    $('.vis_1-2 a').mouseenter(function () {
        $(this).css({
            'backgroundColor': '#aa8768',
            'transition': '.7s',
            'color': '#fff',
            'font-weight': '600',
            'overflow': 'hidden',
        });


        setTimeout(function () {
            $('.vis_1-2 a i').fadeIn();
            $('.vis_1-2 a i').css({
                'transform': 'translateX(140%)',
                'transition': '.5s'
            });
        }, 200);

    });
    $('.vis_1-2 a').mouseleave(function () {
        $(this).css({
            'backgroundColor': '#404040',
            'transition': '.7s',
            'color': '#aa8768'
        });


        $('.vis_1-2 a i').css({
            'transform': 'translateX(-5px)',
            'transition': '.5s'
        });


    });
//4
var i=0,top;
function nav(e) {
    top = $(window).scrollTop();
    if (e.originalEvent.wheelDelta < 0) {
            i += 2;
    } else {
        i -= 2;
    }
    //Our VISUAL 움직이기
    if (top > $('.seating').offset().top) {
        $('.set_2 .set_info h2').css({
            'transform': 'translateX(' + (i*4) + 'px)',
            'transition': '.2s'
        });
        
    }
    $('.set_2 .set_info h2:after').css({
        'transform': 'translateX(0px)',
        'transition': '.2s'
    });

}


$(window).on('mousewheel', nav);


});


//3
window.addEventListener('DOMContentLoaded', function () {
    //start
    var navEl = document.querySelectorAll('.side_map a');
    var secEl = document.querySelectorAll('section');

    var p = document.querySelectorAll('.side_map a p');


    //수치를 미리 싹 받아놓고 담아놓는 방법
    var secArr = [];
    secEl.forEach(function (sl, idx) {
        secArr.push(sl.offsetTop);
    });

    //  console.log(secArr); secArr에 담아놈 push가 담아놓는거야
    navEl.forEach(function (sl, idx) {
        sl.addEventListener('click', function (e) {
            e.preventDefault();
            //  var a = secEl[idx].offsetTop;
            var a = secArr[idx];
            window.scrollTo(0, a);});

        
        
        
    });


    var winH = window.innerHeight / 2;
    //이게 반절임 
    window.addEventListener('scroll',scroll_11);
    window.addEventListener('touchmove',scroll_11);
                                                   
                            
    function scroll_11(){

        secArr.forEach(function (el, idx) {
            //반절만 쪼끔만 지나가도 불이 들어올거임
            if (window.scrollY >= secArr[idx] - winH) {
                //  console.log(idx);
                navEl.forEach(function (a, i) {
                    a.classList.remove('active');
                    p[i].classList.remove('active');
                });

                navEl[idx].classList.add('active');
                p[idx].classList.add('active');

            }
        });
    }

    //end   
});

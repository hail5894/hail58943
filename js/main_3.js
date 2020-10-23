function init() {

    function photoSlide(ele, w, x, y, z) {
        //선언
        var main = document.querySelector(ele);
        var sch = main.querySelector('span');
        var photo = document.querySelector(w);
        var slide_1 = document.querySelector(x);
        var slideImg = slide_1.querySelectorAll(y);

        var phoNum = document.querySelector(z);


        // 1. 돋보기 mouseover/mouseout
        main.addEventListener('mouseover', function () {
            sch.style = "display:flex; left:50%; top:40%;";
        });

        main.addEventListener('mouseout', function () {
            sch.style = "display:none;";
        });


        // 2. 사진,동영상 클릭시 포토화면나오게하기,엑스표시 닫기 클릭
        main.addEventListener('click', fun);

        function fun() {
            var x = document.querySelectorAll('.pho_x');
            x.forEach(function (e) {
                e.addEventListener('click', function () {
                    photo.style = "display:none;"
                    document.documentElement.style.overflowY = 'scroll';
                });
                photo.style = "display:block;";
                //스크롤 가리기
                document.documentElement.style.overflowX = 'hidden';
                document.documentElement.style.overflowY = 'hidden';
            })


        }

        //3. 사진,동영상 클릭시 넘겨지게 하기,숫자증감
        var move = 0;

        slideImg.forEach(function (el, i) {
            el.addEventListener('mousewheel', function (e) {
                if (e.wheelDelta < 0) {
                    //down 내리면(-)
                    try {
                        move = el.nextElementSibling.offsetLeft;
                        phoNum.innerHTML = '0' + (i + 1 + 1);

                    } catch {
                        alert('마지막 사진입니다.')
                    } finally {}
                } else {
                    //up 올리면 (+)
                    try {
                        move = el.previousElementSibling.offsetLeft;
                        phoNum.innerHTML = '0' + (i);
                    } catch {
                        alert('이전 사진이 없습니다.')
                    }
                }
                slide_1.style.transform = "translateX(-" + move + "px)";


            });


            /*2.모바일 사진*/
            if(window.innerWidth<480){
            el.addEventListener('click', function (e) {
                console.log('a')
                try {
                    move = el.nextElementSibling.offsetLeft;
                    phoNum.innerHTML = '0' + (i + 1 + 1);
                } catch {
                    alert('마지막 사진입니다.');
                } finally {}
                slide_1.style.transform = "translateX(-" + move + "px)";
            });
          
            }

        });
    }
    photoSlide('.a', '.pho', '.pho_display div', '.pho_vdo', '.pho_num_1');
    photoSlide('.b', '.video', '.vdo_display div', '.pho_vdo', '.vdo_num_1');

    //end 
}

window.addEventListener('DOMContentLoaded', init);


$(function () {
    var video = $('.pho_vdo video').get(0);

    $('.btn_2_2').hide();
    video.play();

    $('.vdoCool').on('mouseenter', videoToll);

    function videoToll() {
        var a = $(this).index();
        video = $('.pho_vdo video').get(a);

        $('.btn_2_2').fadeIn();
        $('.btn_2_2').on('click', function (e) {
            if (video.paused === false) {
                video.pause();
            } else {
               // $('.pho_vdo > img').attr('src', 'img/main_3/arrow_1.png');

                video.play();
            }
        });
    }

    $('.pho_vdo').on('mouseleave', function () {
        $('.btn_2_1').fadeOut();

    });

    if (window.innerWidth < 480) {

        $('.vdoCool').on('touchstart', videoToll);
        
      
    }



});

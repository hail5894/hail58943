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
        });

    }
    photoSlide('.a', '.pho', '.pho_display div', '.pho_vdo', '.pho_num_1');
    photoSlide('.b', '.video', '.vdo_display div', '.pho_vdo', '.vdo_num_1');

    //end 
}

window.addEventListener('DOMContentLoaded', init);


// $(function () {
//     move = 100;
    
//     var e = 1;
//     e++;
        
//              $(window).on({
//                  mousewheel:function (e){
//                     e.preventDefault();
//                     e.stopPropagation();
                   
                    
//                     if (e.wheelDelta < 0) {
//                         console.log(e.wheelDelta)
//                         //down 내리면(-)
//                         try {
//                             move = el.nextElementSibling.offsetLeft;
                            
//                         } catch {
//                             alert('마지막 사진입니다.')
//                         } finally {}
//                     }
                    
//                         e++;
//                     $('.vdo_display > div').css({
//                         'transform': 'translateX(-' + e * move + '%)'
//                     }); 
//                     // $('.vdo_num_1').html('0'+(el+1));   
//                  }
            
//         });

// });

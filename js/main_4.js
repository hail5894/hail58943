// $(function () {
//     //1
//     var secArr = [],win= $('.not_main_1');
//     win.each(function(idx,el){
//         secArr.push($(this).offset().top);
//     });


//     //2
//     var winH = $(window).innerHeight / 2;
//     function nav(e) {
//       if(e.originalEvent.wheelDelta < 0){

//         secArr.forEach(function(){
//             if($(window).scrollY <= $(window).innerHeight()){
//                 $('.not_main_1').each(function(i,e){
//                     $(this).hide();
//                 });
//             }
//         });
//       }else{

//       }



//     };

//     $(window).on('mousewheel', nav);
// });



window.addEventListener('DOMContentLoaded', function () {

    //  1. 콘텐츠 상단 위치값
    var liEle = document.querySelectorAll('.not_main_1');
    window.addEventListener('scroll', fadeFun);
    var winH = window.innerHeight / 2;
    liEle[0].classList.add('active');
    function fadeFun() {
        liEle.forEach(function (el, idx) {
            if (el.offsetTop - winH< this.scrollY) {
                //  console.log(el.offsetTop);
                el.classList.add('active');
            }

        });
        //offsetTop 0부터 li top까지의 거리 1이나 2나 무조건 0부터
        //브라우저 크기만큼만 알아서 offsetTop에서 빼준다
    }
});

$(function () {
    //start
    // /mouseenter


    $('.not_photo').mouseenter(function () {
        $(this).children('span').fadeIn(400);
        $(this).children('span').css({
            'display': 'flex',
            'transition':'.7'
        });
        $(this).children('.not_font').children('p').children('img').attr('src','img/main/not_1_1.jpg'); 
   
    });
    //mouseleave
    $('.not_photo').mouseleave(function () {
        $(this).children('span').fadeOut(100);
        $(this).children('span').css({
            'transition':'.7'
            
        });
        $(this).children('.not_font').children('p').children('img').attr('src','img/main/not_1.jpg');
       
    });


});
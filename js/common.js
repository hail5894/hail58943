
$(function ()  {
    //load 
    $('header').load('inc_head_foot.html header .head',menu);
    $('footer').load('inc_head_foot.html footer .footer');
    //2 menu함수 (버거메뉴 클래스발동)
    function menu(){
    $('.menu-trigger').on('click',function(){
       $(this).toggleClass('active');
       $('nav').toggleClass('active'); 
    });}
    //3 하단 btn 클릭시 상단부 위치
    $('.btn').on('click',function(){
        window.scrollTo({
            left:0,
            top:0,
        behavior:"smooth"
        });
    });
    //4 일정 위치에서 헤더 배경 생성,nav의 마우스 댈 때 움직임
    var $spotHeight =  $('svg, .who_top').offset().top;
    var top;
    
    $(window).on('scroll',nav);
    
    function nav(){
        top = $(window).scrollTop();
        if(top > $spotHeight){
            $('header').addClass('active');
            $('header > article h1').addClass('active');
     
        }else{
            $('header').removeClass('active');
            $('header > article h1').removeClass('active');
        
        }
    }
    setTimeout(function(){
    $('.nav ul').children('li').on('mouseover',function(){
       $('.nav ul').children('li').removeClass('active');   
       $(this).addClass('active');   
    }); 
    },20);

    
    
    

});


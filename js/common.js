function init() {

    //console.log(location.pathname);
    // console.log(location.host);
    $('header').load('inc_head_foot.html header .head',menu);
    $('footer').load('inc_head_foot.html footer .footer');
    
    
    //콜백함수쓰기
    function menu(){
    const menu = document.querySelector('.menu-trigger');
    const nav = document.querySelector('nav');
    
   
    menu.addEventListener('click', function () {
        menu.classList.toggle('active');
        nav.classList.toggle('active');
    });
    }
    
    
 /*2*/
    var asideEl = document.querySelector('.btn');
    var asideTop = asideEl.offsetTop;
    asideEl.addEventListener('click',function(){
        
        window.scrollTo({
            left:0,
            top:0,
        behavior:"smooth"
        });
        //asideEl을 클릭하면 window 좌표를 0,0하겠다
        
    });
  
}

window.addEventListener('DOMContentLoaded', init);


$(function ()  {
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
    },10);

    
    
    

});


$(function() {
    //start

    $('header').load('inc_head_foot.html header .head',menu_1);
    $('footer').load('inc_head_foot.html footer .footer');
    
    
    function menu_1(e){
    $('.menu-trigger').on('click',function(){
        $(this).toggleClass('active');
        $('nav').toggleClass('active');
    });
        
    }
    setTimeout(function(){
    $('.nav ul').children('li').on('mouseover',function(){
       $('.nav ul').children('li').removeClass('active');   
       $(this).addClass('active');   
    }); 
    },20);
    
    
    //사진 fade
    $('.cas_1').not(':first').hide();
    var idx = 0;
    var loop;
    $('.fixing').on('mousewheel',fadeM);
    $('.fixing').on('click',fadeC);

    //img change
    function fadeC(){
        $('.cas_1').eq(idx).fadeOut(700);
        idx++;
        update();
        $('.cas_1').eq(idx).fadeIn(700);
    }    

    function fadeM(e){
        $('.cas_1').eq(idx).fadeOut(700);
        if(e.originalEvent.wheelDelta < 0){idx++;}else{idx--;}
        update();
        $('.cas_1').eq(idx).fadeIn(700);
      
       
       
    }    
    //idx setting
    function update(){
        var len = $('.cas_1').length;
        if(idx >= len){
            idx=0;
            alert('마지막 화면입니다.');
        }
        if(idx == -1){ 
            idx=len-1;
            alert('처음 화면입니다.');
        }
    }
    
    
    //prev,next click event

    //end
});
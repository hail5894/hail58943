

$(function () {



    $('.me_1').each(function (idx, el) {
       
        $(this).on('mouseenter', function () {
            console.log($(this));
            $(this).parent().css({
                'background': "url(../img/menu/ba"+(idx+1)+".jpg)"
            }); 

           console.log(idx);
    });
});

});


/* 
function init() {
    var menu = document.querySelector('.menu');
    var me_1 = document.querySelectorAll('.me_1');

     me_1.forEach(function(el,idx){
        me_1[idx].addEventListener('mouseenter',me);
        console.log(idx);
        function me(){
            menu.style.backgroundImage="url('../img/menu/ba"+(idx+1)+".jpg')";
        }
        
    });
  
}

window.addEventListener('DOMContentLoaded', init); */
// function init() {
//     //first
//     var main = document.querySelector('.casting');
   
//     var slide_1 = document.querySelector('.fixing');
//     var slideImg = slide_1.querySelectorAll('.cas_1');


//     var move = 0;

//     slideImg.forEach(function (el, i) {
//         el.addEventListener('mousewheel', function (e) {

//             if (e.wheelDelta < 0) {
//                //down 내리면(-)
//                 try {
//                     move = el.nextElementSibling.offsetLeft;
                 
//                 } catch {
//                     alert('마지막 사진입니다.')
//                 } finally {}
//             } else {
//                 //up 올리면 (+)
//                 try {
//                     move = el.previousElementSibling.offsetLeft;
                 
//                 } catch {
//                     alert('이전 사진이 없습니다.')
//                 }
//             }
//             slide_1.style.transform = "translateX(-" + move + "px)";

//         });
//     });




//     //end 
// }

// window.addEventListener('DOMContentLoaded', init);


$(function() {
    //start
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
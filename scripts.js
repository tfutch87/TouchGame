

$("#animate").on("touchmove",function(evt){

    var touch = evt.originalEvent.touches[0];
    var height = $(this).height() /2;
    var width = $(this).width() /2;  
    var x = touch.clientX;
    var y = touch.clientY;

    
    $(this).css({
        "-webkit-transform": "translate3d("+ x +"px, "+ y + "px,0)"  
    
    });

});





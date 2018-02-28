$(document).ready(function(){
    var mynav = $("nav");
    $(window).scroll(function(){
        var hight = $(this).scrollTop();

        //console.log(hight);
        if(hight>0){
            $(".nav-content").hide(300);
            $("#anim_row").hide(300);
        }
        else{
            $(".nav-content").show(300);
            $("#anim_row").show(300);

        }
        if(hight>471){
            mynav.addClass("blue darken-4");

        }
        else{
            
            mynav.removeClass("blue darken-4");
        }
    });
});

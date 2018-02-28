$(document).ready(function(){

            var mynav = $("nav");
            

    $(window).scroll(function(){
        var hight = $(this).scrollTop();
        
        console.log(hight);
        if(hight>471){
            mynav.addClass("blue darken-4");

        }
        else{
            
            mynav.removeClass("blue darken-4");
        }
        
        

    });
});

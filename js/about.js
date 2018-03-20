$(document).ready(function(){
    var roadmap = $("#roadMap");
    var team = $("#team");
    var news = $("#news");

    var temp = roadmap;

    roadmap.on('click',function(){
        if(temp==null){
            temp = $(this);
            $(this).addClass('active');
        }else{
            if(temp!=null){
                temp.removeClass("active");
                $(this).addClass('active');
                temp = $(this);
            }
        }

    });
    team.on('click',function(){
        if(temp==null){
            temp = $(this);
            $(this).addClass('active');
        }else{
            if(temp!=null){
                temp.removeClass("active");
                $(this).addClass('active');
                temp = $(this);
            }
        }

    });
    news.on('click',function(){
        if(temp==null){
            temp = $(this);
            $(this).addClass('active');
        }else{
            if(temp!=null){
                temp.removeClass("active");
                $(this).addClass('active');
                temp = $(this);
            }
        }

    });


});
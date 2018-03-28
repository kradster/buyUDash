$(document).ready(function () {
    var sl = $('#storyline-section');
    var tl = $('#teamline-section');
    var cl = $('#map-section');

    var storyheading = $('#head-1');
    var teamheading = $('#head-2');
    var slhop = sl.offset().top;



    console.log(slhop);




    var step1 = $("#a1");
    var step2 = $("#a2");
    var step3 = $("#a3");
    var step4 = $("#a4");
    var step5 = $("#a5");
    var step6 = $("#a6");
    var step7 = $("#a7");
    var step8 = $("#a8");
    var step9 = $("#a9");
    var step10 = $("#a10");

    $(window).scroll(function () {
        var hight = $(this).scrollTop();
        var boo = false;

        if (hight > 366) {
            step1.addClass("faa-bounce animated");
        }
        if (hight > 651) {
            step2.addClass("faa-bounce animated");
        }
        if (hight > 793) {
            step3.addClass("faa-bounce animated");
        }
        if (hight > 1110) {
            step4.addClass("faa-bounce animated");
        }
        if (hight > 1190) {
            step5.addClass("faa-bounce animated");
        }
        if (hight > 1515) {
            step6.addClass("faa-bounce animated");
        }
        if (hight > 1556) {
            step7.addClass("faa-bounce animated");
        }
        if (hight > 1871) {
            step8.addClass("faa-bounce animated");
        }
        if (hight > 1953) {
            step9.addClass("faa-bounce animated");
        }
        if (hight > 2207) {
            step10.addClass("faa-bounce animated");
        }

    });



    $("#openStory").on('click', function () {
        var offset = sl.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top - 60
        }, 1000, 'swing');
    });

    $("#openTeam").on('click', function () {
        var offset = tl.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top - 60
        }, 1000, 'swing');
    });

    $("#openNews").on('click', function () {
        var offset = nl.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top - 60
        }, 1000, 'swing');
    });

    $("#openContact").on('click', function () {
        var offset = ml.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top
        }, 1000, 'swing');
    });
    

    $("#openStory1").on('click', function () {
        var offset = $('#storyline-section-2').offset().top;
        console.log(offset);
        $('html,body').animate({
            scrollTop: offset-60
        }, 1000, 'swing');
    });

    $("#openTeam1").on('click', function () {
        var offset = tl.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top - 60
        }, 1000, 'swing');
    });


    $("#openContact1").on('click', function () {
        var offset = cl.offset();
        console.log(offset.top);
        $('html,body').animate({
            scrollTop: offset.top
        }, 1000, 'swing');
    });
});
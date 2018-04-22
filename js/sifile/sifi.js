$(document).ready(function(){
    var sl1 = $('#step-label1');
    var sl2 = $('#step-label2');
    var sl3 = $('#step-label3');

    var fs1 = $("#formstep1");
    var fs2 = $("#formstep2");
    var fs3 = $("#formstep3");

    var nsb1 = $("#nextStep1");
    var nsb2 = $("#nextStep2");
    
    var psb1 = $("#prevStep1");
    var psb2 = $("#prevStep2");

    var email = $('#email');
    var password = $('#password');
    var refferal = $('#refferal');


    nsb1.on('click',function(){
        fs1.addClass('hide');
        fs2.removeClass('hide');
        sl2.removeClass('grey-text');
    });
    nsb2.on('click',function(){
        fs2.addClass('hide');
        fs3.removeClass('hide');
        sl3.removeClass('grey-text');
        console.log(email.val(),password.val(),refferal.val());
    });

    psb2.on('click',function(){
        fs2.addClass('hide');
        fs1.removeClass('hide');
        sl2.removeClass('grey-text');
    });

    

    





});
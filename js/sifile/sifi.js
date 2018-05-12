$(document).ready(function(){
    var sl1 = $('#step-label1');
    var sl2 = $('#step-label2');
    var sl3 = $('#step-label3');

    var fs1 = $("#formstep1");
    var fs2 = $("#formstep2");
    var fs3 = $("#formstep3");

    var nsb1 = $("#nextStep1");
    var nsb2 = $("#nextStep2");
    var otpLogin = $('#otplogin');
    
    var psb1 = $("#prevStep1");
    var psb2 = $("#prevStep2");

    var email = $('#email');
    var password = $('#password');
    var refferal = $('#refferal');
    var otp = $('#otp');/////////////////////////////////
    var refferalBody = $('#refferalBody');
    var otpBody = $('#otpBody');///////////////////////////
    var recaptchaBody = $('#recaptchaBody');//////////////////

    var EMAIL;
    var PASSWORD;
    var REFFERAL;
    var OTP;////////////////////////////////////

    var ERROR_HEAD = $('#error');
    ERROR_HEAD.removeClass('hide');
    

    nsb1.on('click',function(){
        EMAIL = email.val();
        PASSWORD = password.val();
        if(EMAIL==""||PASSWORD==""){
            ERROR_HEAD.text('PLEASE FILL ALL FIELDS');
            ERROR_HEAD.addClass('red');
            ERROR_HEAD.show(300);
            setTimeout(() => {
                ERROR_HEAD.hide(300);
            }, 3000);
        }else{
            if(!validateEmail(EMAIL)){
             ERROR_HEAD.text('INVALID EMAIL ADDRESS');
             ERROR_HEAD.show(300);
             setTimeout(() => {
                ERROR_HEAD.hide(300);
            }, 3000);
            }else{

                fs1.addClass('hide');
                fs2.removeClass('hide');
                sl2.removeClass('grey-text');
                sl2.addClass('white-text');

                if(EMAIL=='vinodkaradiya@gmail.com' && PASSWORD=='12345678'){///////////////////////
                    nsb2.hide();
                    psb2.hide();
                    refferalBody.hide();
                    recaptchaBody.hide();
                    otpLogin.removeClass("hide");
                    otpBody.removeClass("hide");
                }

            }
        }

    });
    nsb2.on('click',function(){
        REFFERAL = refferal.val();
        fs2.addClass('hide');
        fs3.removeClass('hide');
        sl3.removeClass('grey-text');
        sl3.addClass('white-text');
        console.log(email.val(),password.val(),refferal.val());
    });

    psb2.on('click',function(){
        fs2.addClass('hide');
        fs1.removeClass('hide');
        sl2.removeClass('grey-text');
    });

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test( $email );
      }
    

    





});
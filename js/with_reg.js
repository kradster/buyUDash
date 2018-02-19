var submitBtn = document.getElementById("sub-reg-btn");//submit button of withdraw tab on regular tab
    var label1 = document.getElementById("lupi");//label of upi radio button
    var label2 = document.getElementById("lrtgs");//label of rtgs radio button
    var label3 = document.getElementById("lneft");//label of neft radio button
    var ptype ;

    //submit button function of ragular payment tab
    submitBtn.addEventListener('click',function(){
        var amnt = document.getElementById("id_ead").value;//element of ammount to be deposited.
        var utr = document.getElementById("id_eun").value;//element of utr no .
        var date = document.getElementById("id_date").value;//element of date .
        var pt = ptype; //payment type
        var obj = {
            amount:amnt,
            utr:utr,
            date:date,
            pay_type:pt
        };//object that contains all data of regualr withdraw form.
        console.log(obj);
    });



    label1.addEventListener('click',function(){ptype = 'upi'});//label 1 function that converts paytyp to upi
    label2.addEventListener('click',function(){ptype = 'rtgs'});//label 1 function that converts paytyp to rtgs
    label3.addEventListener('click',function(){ptype = 'neft'});//label 1 function that converts paytyp to neft

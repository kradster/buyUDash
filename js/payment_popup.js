$(document).ready(function(){

    var network_fees = 0;



    $(document).on('click', '#depo1', function() {
                //console.log("bitcoin address",$(this).data("address"));
                $('#modal_btc_type_rec').modal('open');

            });



            $(document).on('click', '#widw2', function() {
                $('#modal_rpl_type_send').modal('open');
                console.log($(this).data("address"));
                network_fees = parseFloat($(this).data("fees"));
                if(!$(this).data("isrpl")){
                    $("#tag_input").css("display","none");
                }
                else{
                 $("#tag_input").css("display","block");
                }
                $('#send_money_rpl').click(function(){
                    var x1,x2,x3;
                     x1 = $('#xrp_amt').val();
                    if(!$(this).data("isrpl")){
                    x2 = $('#xrp_tag').val();
                }
                    x3 = $('#xrp_add').val();
                    if(!(x1==""||x2=="")){
                    console.log(x1,y1,z1);
                    $('#xrp_amt').val("");
                    $('#xrp_tag').val("");
                    $('#xrp_add').val("");
                    $("#status2").text("");
                    $('#modal_rpl_type_send').modal('close');
                    }
                    else{
                       $("#status2").text("Plese fill all the field");
                    }
                });
            });



            $("#xrp_amt").blur(function(){
                var x = $("#xrp_amt").val();
                var y = $()
                if(!x=="")
                $("#status2").text("You Will Get This :"+((parseFloat(x)*100000000-(network_fees)*100000000)/100000000));
            });
            $("#xrp_add").blur(function(){
                var x = $("#xrp_add").val();
                if(!x=="")
                $("#status2").text("You Will Get This:"+((parseFloat(x)*100000000-(network_fees)*100000000)/100000000));
            });

            $("#xrp_tag").blur(function(){
                var x = $("#xrp_amt").val();
                if(!x=="")
                $("#status2").text("You Will Get This:"+((parseFloat(x)*100000000-(network_fees)*100000000)/100000000));
            });





});

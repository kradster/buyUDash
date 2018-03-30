            $(document).ready(function(){
            getCoinData();
            var cardimg = $("#card-img");
            var cardqty = $("#card-qty");
            var cardprice = $("#card-price");
            var cardfees = $("#card-fees");
            var cardsubtotal = $("#card-subtotal");
            var cardtotal = $("#card-total");
            var qty = $("#qty");

            var coinbar = $('.myscroll');
            var globalprice = 0;
            var globalcoinname = null;

            var buyInput = $("#buy-amt");
            var sellInput = $("#sell-amt");
            var labelInput1 = $("#input-label1");
            var labelInput2 = $("#input-label2");
            var showprice = $("#inr-amt");

            var buyWindow = $('#buy-form');
            var sellWindow = $('#sell-form');

            var buybtn = $('#buy-btn');
            var sellbtn = $('#sell-btn');

            var realbtnbuy  = $('#real-buy-btn');
            var realbtnsell  = $('#real-sell-btn');

            var label1 = $('#show-inr-buy');
            var label2 = $('#show-inr-sell');

            var buyTab = $('#buy-coin'); 
            var sellTab = $('#sell-coin'); 
            var temp;

            sellWindow.hide();
            sellbtn.hide();



            var x = $(".collection");
            $(document).on('click','.collection',function () {
                if (temp == null) {
                    temp = $(this);
                    $(this).css("border", "1px solid #00e676");
                    $(this).addClass("ticker");
                } else {
                    if (temp != null) {
                        temp.css("border", "1px solid #ccc");
                        temp.removeClass("ticker");
                        $(this).css("border", "1px solid #00e676");
                        $(this).addClass("ticker");
                        temp = $(this);
                    }
                }
                
                var imgSrc = $(this).data('img');
                var price = $(this).data('price');
                var name = $(this).data('name');
                globalcoinname = $(this).data('name');
                var fees = $(this).data('fees');

                cardimg.attr('src',imgSrc);
                cardprice.text('@ '+price);
                cardfees.text(fees+"/-");

                globalprice = price;
                globalfees = fees;

                cardqty.text(name);
                buyInput.val('1.000');
                sellInput.val('1.000');
                labelInput1.text(name);
                labelInput2.text(name);
                label1.text(price+"/-");
                label2.text(price+"/-");

                inrInput.val(price);
                console.log(imgSrc,price);
            })
                    

            buyTab.on('click',function(){
                $(this).addClass('active light-blue  white-text');
                sellTab.removeClass('active light-blue  white-text');
                buyWindow.show();
                buybtn.show();
                sellWindow.hide();
                sellbtn.hide();
                
                
            });

            sellTab.on('click',function(){
                $(this).addClass('active light-blue  white-text');
                buyTab.removeClass('active light-blue  white-text');
                sellWindow.show();
                sellbtn.show();
                buyWindow.hide();
                buybtn.hide();
                
            });



            buyInput.on('blur',function(){
                var buy = $(this).text();
                if(buy===""){
                    console.log('text box is empty');
                    realbtnbuy.attr('disabled','disabled');
                }
                else{
                    var totalinr = (buy*globalprice);
                    if(!isNaN(buy)){
                        if(buy>0){
                        label1.text(totalinr+"/-");
                        cardsubtotal.text(totalinr+"/-");
                        cardtotal.text(totalinr+globalfees+"/-");
                        realbtnbuy.removeAttr('disabled');
                    }else{
                        realbtnbuy.attr('disabled','disabled');
                        label1.text("0/-");
                    }
                    }
                    else{
                        console.log('not a number');
                        realbtnbuy.attr('disabled','disabled');
                        label1.text("0/-");
                    }
                    
                }
            });

            

            sellInput.on('blur',function(){
                var sell = $(this).text();
                if(sell===""){
                    console.log('text box is empty');
                    realbtnsell.attr('disabled','disabled');
                }
                else{
                    var totalinr = (sell*globalprice);
                    if(!isNaN(sell)){
                        if(sell>0){
                        label2.text(totalinr+"/-");
                        cardsubtotal.text(totalinr+"/-");
                        cardtotal.text(totalinr+globalfees+"/-");
                        realbtnsell.removeAttr('disabled');
                        }else{
                            realbtnsell.attr('disabled','disabled');
                            label2.text("0/-");
                        }
                    }
                    else{
                        console.log('not a number');
                        realbtnsell.attr('disabled','disabled');
                        label2.text("0/-");
                    }
                    
                }
            });

            realbtnbuy.on('click',function(){
                var buyamt = buyInput.text();
                var coinname = globalcoinname;

                var orderobject = {
                    'buyAmt':buyamt,
                    'coin':coinname
                }
                console.log(orderobject);
            });

            realbtnsell.on('click',function(){
                var sellamt = sellInput.text();
                var coinname = globalcoinname;

                var orderobject = {
                    'sellAmt':sellamt,
                    'coin':coinname
                }
                console.log(orderobject);
            });

            

            

            
            
            function getCoinData() {
                $.ajax({
                    url: "http://127.0.0.1:5800/images/biglogo/data.json",
                    type: "GET",
                    dataType: "json",
                    data: {},
                    success: function (response) {
                        data = response;
                         for (var x in response) {
                           // console.log(data[x].name);
                           var price = (Math.round(Math.random()*1000)+1);
                           var fees = Math.round(Math.random()*10);
                            coinbar.append("<div class='coin-badge'><div class='collection center' id='btc-b' data-img='"+data[x].src+"' data-fees='"+fees+"' data-price='"+price+"' data-name='"+ data[x].name +"'><img src='"+data[x].src+"' alt='' class='myimg' style='width:50px;padding:10px;'><p class='coin-label' style='margin-top:-10px;'><b>" + data[x].name + "</b></p><p>@ "+price+"/-</p></div></div>");
        
                        }
        
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        
        });
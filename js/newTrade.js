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
            var globalprice;

            var btcInput = $("#btc-amt");
            var inrInput = $("#inr-amt");

            var buyWindow = $('.buy-tab');
            var sellWindow = $('.sell-tab');
            var buyTab = $('#buy-coin'); 
            var sellTab = $('#sell-coin'); 
            var temp;
            sellWindow.hide();

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
                cardimg.attr('src',imgSrc);
                cardprice.text(price);
                globalprice = price;
                cardqty.text('1.000 '+name);
                btcInput.val('1.000');
                inrInput.val(price);
                console.log(imgSrc,price);
            })
                    

            buyTab.on('click',function(){
                $(this).addClass('active light-blue  white-text');
                sellTab.removeClass('active light-blue  white-text');
                buyWindow.show();
                sellWindow.hide();
                
                
            });

            sellTab.on('click',function(){
                $(this).addClass('active light-blue  white-text');
                buyTab.removeClass('active light-blue  white-text');
                sellWindow.show();
                buyWindow.hide();
                
                    temp.css("border", "1px solid #00e676");
                    temp.addClass("ticker");
                
            });


            btcInput.on('blur',function(){
                var qtytext = $(this).text();
                if(qtytext!==""){
                    qty.text(qtytext);
                    var x = (qtytext*globalprice);
                    if(!isNaN(x)){
                        //x = (qtytext*globalprice);
                        inrInput.text(x);
                        cardtotal.text(x+7.09+"/-");
                    }else{
                        btcInput.text('plz enter a valid number');
                        
                    }
                    console.log(x);
                }
                else{
                    qty.text('1.000');
                }
                console.log(qtytext);
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
                            coinbar.append("<div class='coin-badge'><div class='collection center' id='btc-b' data-img='"+data[x].src+"' data-price='708.43' data-name='"+ data[x].name +"'><img src='"+data[x].src+"' alt='' class='myimg' style='width:50px;padding:10px;'><p style='margin-top:-10px;'><b>" + data[x].name + "</b></p><p>@ 708.43/-</p></div></div>");
        
                        }
        
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            }
        
        });
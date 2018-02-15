$('Document').ready(function () {

    /*var rateData = $("#ratesData");
    //var myArray = [];
    //var coins = [];
    //var mycoins = [
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[]
    ];
    var curruncy = [
        'ark','bat','bcc','bts','cloak','cvc','dash','dgb','dcn','doge',
        'etc','eth','fct','gnt','inr','lsk','ltc','neo','nxt','omg',
        'pay','pivx','qtum','rep','sc','steem','xem','xmr','xrp','zec'
    ];
    */

    setInterval(function(){
        //getRates();
        console.log("okk");
    },1000);

    function getRates() {
        $.ajax({
            url: "http://localhost/buyUDash/ajax_rate.json",
            type: "GET",
            dataType: "json",
            data: {},
            success: function (data) {

                for (var x in data.currencies) {
                    var _name = document.getElementById(x+'_name');
                    var _ltd = document.getElementById(x+'_ltd');
                    var _vol = document.getElementById(x+'_vol');
                    var _low24 = document.getElementById(x+'_low24');
                    var _high24 = document.getElementById(x+'_high24');
                    var _change = document.getElementById(x+'_pcng');
                    
                    _name.textContent = data.crypto.currencies[x];
                    _ltd.textContent = data.crypto[x].last_trade;
                    _vol.textContent = data.crypto[x].vol;
                    _low24.textContent = data.crypto[x].low_24;
                    _high24.textContent = data.crypto[x].high_24;
                    _change.textContent = data.crypto[x].change;
                    var isPositve = data.crypto[x].positive;
                    
                    if(isPositve){
                       _change.style.backgroundColor = "green"; 
                    }
                    else{
                        _change.style.backgroundColor = "red"; 
                    }
                    
                    
                }

            },
            error: function (error) {
                console.log(error);
            }
        });
    }

    //console.log(mycoins);

    function extracData(arr) {
        for (var i = 0; i < mycoins.length; i++) {
            mycoins[i].push(coins[i]);
        }

    }

    function updataTable(arr) {
        for (var i = 0; i < arr.length; i++) {
            var MyObj = arr[i][0];
            var cname = curruncy[i];
            var ctrade = MyObj.last_trade;
            var cvol = MyObj.vol;
            var c24low = MyObj.low_24;
            var c24high = MyObj.high_24;
            var change24 = MyObj.change;
            var rnd = Math.floor((Math.random() * 30) + 1);

        rateData.append('<tr><td>' + (cname) + '</td><td>' + (ctrade) + '</td><td>' + (cvol) + '</td><td>' + (c24low) + '</td><td>' + (c24high) + '</td><td>' + (change24) + '</td></tr>');


        }


    }


 if(typeof(EventSource) !== "undefined") {
    var source = new EventSource("http://192.168.1.8:5000/ajax_rate");
    source.onmessage = function(event) {
        var jsn = JSON.parse(event.data.crypto);
        for(var i in jsn){
            id.push(jsn[i]);
            console.log(jsn[i]);
        }
        rateData.append('<tr><td>' + (cname) + '</td><td>' + (ctrade) + '</td><td>' + (cvol) + '</td><td>' + (c24low) + '</td><td>' + (c24high) + '</td><td>' + (change24) + '</td></tr>');
    };
} else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent events...";
}

});

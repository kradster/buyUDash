$('Document').ready(function () {

    var rateData = $("#ratesData");
    var myArray = [];
    var coins = [];
    var mycoins = [
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[],
        [],[],[],[],[],[],[],[],[],[]
    ];
    var curruncy = [
        'ark','bat','bcc','bts','cloak','cvc','dash','dgb','dcn','doge',
        'etc','eth','fct','gnt','inr','lsk','ltc','neo','nxt','omg',
        'pay','pivx','qtum','rep','sc','steem','xem','xmr','xrp','zec'
    ];

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

                for (var x in data) {
                    myArray.push(data[x]);
                }
                for (var i in myArray[0].crypto) {
                    coins.push(myArray[0].crypto[i]);
                }
              //console.log("myarray "+myArray);
              //console.log("mycoins "+mycoins);
                extracData();
                updataTable(mycoins);
                mycoins = new Array();
                coins = new Array();
                myArray = new Array();



                //console.log("myarray "+myArray);
                //console.log("mycoins "+mycoins);


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

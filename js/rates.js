$('document').ready(function () {
    var rateData = $("#ratesData");
    var myArray = [];
    var coins = [];
    var mycoins = [
        ark = [],
        bat = [],
        bcc = [],
        bts = [],
        cloak = [],
        cvc = [],
        dash = [],
        dcn = [],
        dgb = [],
        doge = [],
        etc = [],
        eth = [],
        fct = [],
        gnt = [],
        inr = [],
        lsk = [],
        ltc = [],
        neo = [],
        nxt = [],
        omg = [],
        pay = [],
        pivx = [],
        qtum = [],
        rep = [],
        sc = [],
        steem = [],
        strat = [],
        xem = [],
        xmr = [],
        xrp = [],
        zec = []


    ];
    getRates();
    //setInterval(getRates,1000);

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
                console.log(myArray);
                for (var i in myArray[0].crypto) {
                    coins.push(myArray[0].crypto[i]);
                }
                console.log(coins);
                extracData();
                updataTable(mycoins);

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
        console.log(mycoins);

    }

    function updataTable(arr) {
        for (var i = 0; i < arr.length; i++) {
            var MyObj = arr[i][0];
            console.log(MyObj.last_trade);
            rateData.append('<tr><td>' + (i * 2) + '</td><td>' + (i * 4) + '</td><td>' + (MyObj.change) + '</td><td>' + (MyObj.last_trade) + '</td><td>' + (MyObj.vol) + '</td></tr>');

        }
    }
});
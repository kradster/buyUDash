var config = {
    apiKey: "AIzaSyDZz8XdLIZNgJYB_CLJLH_Ig7hq3YThfjw",
    authDomain: "buyucoin-28d33.firebaseapp.com",
    databaseURL: "https://buyucoin-28d33.firebaseio.com/",
    projectId: "buyucoin-28d33",
    storageBucket: "buyucoin-28d33.appspot.com",
    messagingSenderId: "853650883531"
};

let currencyRef;
let marketRef ;
let bidAskData;
let buyOrders;
let currencies;
let sell_orders;

let $tradePopup = $('#coinParent');

var info1 = document.getElementById('ltd');
var info2 = document.getElementById('ltv');
var info3 = document.getElementById('pcng');
var info4 = document.getElementById('hrvol');
var info5 = document.getElementById('hrhigh');
var info6 = document.getElementById('hrlow');
var info7 = document.getElementById('ath');
var info8 = document.getElementById('atl');

var IdArray = [info1, info2, info3, info4, info5, info6, info7, info8];

var bidsBody = $('#bidsBody');
var askBody = $('#askBody');

$(document).ready(function () {
    firebase.initializeApp(config);
    let currencyRef = firebase.database().ref().child('rates/data/currencies');
    let marketRef = firebase.database().ref().child('market_xrp');
    let bidAskData = marketRef.child('data');
    let buyOrders = marketRef.child('data/buy_orders');
    let crypto = firebase.database().ref().child('rates/data/crypto/');
    let currencies = marketRef.child('data/currencies');
    let sell_orders = marketRef.child('data/sell_orders');

    currencyRef.on('value',currencyRefValFunction,globalError);
    crypto.on('value',cryptoRefValFunction,globalError);
    buyOrders.on('value',buyOrdersRefValFunction,globalError);
    sell_orders.on('value',sellOrdersRefValFunction,globalError);

});

function globalError(err){
    console.log(err);
}


// ALL FIREBASE REFFERENCE VALUE FUNCTION START

function currencyRefValFunction(data){
    tradePopupGenerator(data.val()); 
}
function cryptoRefValFunction(data){
    coinDataMaker(data.val());
}
function buyOrdersRefValFunction(data){
    bidsTableFiller(data.val());
}
function sellOrdersRefValFunction(data){
    askTableFiller(data.val());
} 




// ALL FIREBASE REFFERENCE VALUE FUNCTION END





function tradePopupGenerator(data){
    $tradePopup.empty();
    for(let d in data){
        
    $tradePopup.append(`
    <a href="" class="col s4" style="padding-top:5px;;display:flex;line-height:5px;height:40px;border-radius:10px;">
                    <img src="images/smalllogo/btc.png" alt="" style="position: absolute;">
                    <p class="grey-text" style="position:absolute;margin-left:34px;font-size:.8em;"><b>${data[d]}</b></p>
                </a>
    `);
    }
    

}

////////////////// COIN DATA MAKER FUNCTION GROUP  ///////////////////////

function coinDataMaker(data){
    let coindata = [];
   // console.log(data);
    coindata[0] = data.last_trade;
    coindata[1] = data.last_trade;
    coindata[2] = data.last_trade;
    coindata[3] = data.last_trade;
    coindata[4] = data.last_trade;
    coindata[5] = data.last_trade;
    coindata[6] = data.last_trade;
    coindata[7] = data.last_trade;
   // console.log(coindata);
    for (var i = 0; i < IdArray.length; i++) {
        var rndi = ((Math.random() * 6) + 1);
        var sim = String.fromCharCode(9650);
        var sim2 = String.fromCharCode(9660);
        var rnd = rndi.toString().substring(0,7);
        let elem = IdArray[i];
        valueUpdater(i,elem,rnd,sim,sim2);
        
        
    }
}

function addClass(element, className) {
    var currentClassName = element.getAttribute("class");
    if (typeof currentClassName !== "undefined" && currentClassName) {
        element.setAttribute("class", currentClassName + " " + className);
    } else {
        element.setAttribute("class", className);
    }
}

function rc(){
    removeClass(info1,'red-text animated slideInDown');
    removeClass(info2,'red-text');
    removeClass(info3,'red-text');
    removeClass(info4,'red-text');
    removeClass(info5,'red-text');
    removeClass(info6,'red-text');
    removeClass(info7,'red-text');
    removeClass(info8,'red-text');
    removeClass(info1,'green-text animated zoomIn');
    removeClass(info2,'green-text');
    removeClass(info3,'green-text');
    removeClass(info4,'green-text');
    removeClass(info5,'green-text');
    removeClass(info6,'green-text');
    removeClass(info7,'green-text');
    removeClass(info8,'green-text');
    
}

function removeClass(element, className) {
    var currentClassName = element.getAttribute("class");
    if (typeof currentClassName !== "undefined" && currentClassName) {

        var class2RemoveIndex = currentClassName.indexOf(className);
        if (class2RemoveIndex != -1) {
            var class2Remove = currentClassName.substr(class2RemoveIndex, className.length);
            var updatedClassName = currentClassName.replace(class2Remove, "").trim();
            element.setAttribute("class", updatedClassName);
        }
    } else {
        element.removeAttribute("class");
    }
}

function valueUpdater(index,elem,rnd,sim,sim2){
    if(rnd>5){
        upValue(index,elem,rnd,sim);
    }
    else if(rnd<4){
        downValue(index,elem,rnd,sim2);
    }
}

function upValue(index,elem,rnd,sim){
    if(index==2){
        elem.textContent = "% "+rnd+" "+sim;
    }else{
        elem.textContent = rnd+" "+sim;
    }
    if(index==0){
    addClass(elem,'green-text animated zoomIn');
    }else{
    addClass(elem,'green-text');
    }
}

function downValue(index,elem,rnd,sim2){
    if(index==2){
        elem.textContent = "% "+rnd+" "+sim2;
    }
    else{
        elem.textContent = rnd+" "+sim2;
    }
    if(index==0){
        addClass(elem,'red-text animated slideInDown'); 
    }
    else{
        addClass(elem,'red-text'); 
    }
}

//////////////////////COIN DATA MAKER FUNCTION GROUP END /////////////////////////////////





//////////////////////BID TABLE DATA MAKER FUNCTION GROUP/////////////////////////////////
function bidsTableFiller(data){
    bidsOrderTableMaker(data);
}

function bidsOrderTableMaker(data){

    bidsBody.empty();
    for(let i in data){
        bidsBody.append( `
        <tr class="row">
                    <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].vol}</small></td>
                    <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].price}</small></td>
                    <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].value}</small></td>
                </tr>
            `);
    }
}
//////////////////////BID TABLE DATA  MAKER FUNCTION GROUP END /////////////////////////////////



//////////////////////ASK TABLE DATA  MAKER FUNCTION GROUP /////////////////////////////////
function askTableFiller(data){
    askOrderTableMaker(data);
}

function askOrderTableMaker(data){

    askBody.empty();
    for(let i in data){
        askBody.append( `
        <tr class="row">
             <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].value}</small></td>
             <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].price}</small></td>
             <td class="col s4" style="padding:5px;"><small style="font-size:.6rem;">${data[i].vol}</small></td>
                </tr>
            `);
    }
}
//////////////////////ASk TABLE DATA  MAKER FUNCTION GROUP END /////////////////////////////////



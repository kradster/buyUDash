var buyOrderScreen = $('#buy-order-screen');
var sellOrderScreen = $('#sell-order-screen');
var openBuyOrderScreen = $('#open-buy-order-screen');
var openSellOrderScreen = $('#open-sell-order-screen');

var closeBuyOrderScreen = $('#close-buy-order-screen');
var closeSellOrderScreen = $('#close-sell-order-screen');

var buyButton = $('#buybtn');            
var sellButton = $('#sellbtn');


var orderDetailsPopup = $('#order-details-popup');   

var orderPlacingPopupLoad = $('#order-placing-popup-load');
var orderPlacingPopupSuccess = $('#order-placing-popup-success');        
var orderPlacingPopupError = $('#order-placing-popup-error');
          
var agreeOrder = $('#agree-order');           
var goBack = $('#goback');

var bidsBody = $('#bidsBody');
var askBody = $('#askBody');

(function(){
           
    initIds();
    openBuyOrderScreen.on('click',()=>{buyOrderScreen.show();});
    openSellOrderScreen.on('click',()=>{sellOrderScreen.show();});
    closeBuyOrderScreen.on('click',()=>{buyOrderScreen.hide();});
    closeSellOrderScreen.on('click',()=>{sellOrderScreen.hide()});
    buyButton.on('click',buyButtonFunction);
    sellButton.on('click',sellButtonFunction);
    goBack.on('click',goBackFunction);
    agreeOrder.on('click',agreeOrderFunction);
    setTimeout(fakeOrderTableMaker,3000);
})();

function initIds(){
    buyOrderScreen = $('#buy-order-screen');
    sellOrderScreen = $('#sell-order-screen');

    openBuyOrderScreen = $('#open-buy-order-screen');
    openSellOrderScreen = $('#open-sell-order-screen');

    closeBuyOrderScreen = $('#close-buy-order-screen');
    closeSellOrderScreen = $('#close-sell-order-screen');

    buyButton = $('#buybtn');
    sellButton = $('#sellbtn');

    orderDetailsPopup = $('#order-details-popup');

    orderPlacingPopupLoad = $('#order-placing-popup-load');
    orderPlacingPopupSuccess = $('#order-placing-popup-success');
    orderPlacingPopupError = $('#order-placing-popup-error');


    agreeOrder = $('#agree-order');
    goBack = $('#goback');
}

function fakeOrderSuccessAndError(){
    var num = Math.round(Math.random() * 10 + 1);
    if (num <= 5) {
        orderPlacingPopupLoad.hide();
        orderPlacingPopupError.hide();
        orderPlacingPopupSuccess.show();
    } else if (num >= 5) {
        orderPlacingPopupLoad.hide();
        orderPlacingPopupSuccess.hide();
        orderPlacingPopupError.show();
    } else {
        orderPlacingPopupLoad.hide();
    }
}

function hidePanelAndRemoveAttr(){
    orderPlacingPopupLoad.hide();
    orderPlacingPopupSuccess.hide();
    orderPlacingPopupError.hide();
    buyButton.removeAttr("disabled");
    sellButton.removeAttr("disabled");
    closeBuyOrderScreen.removeAttr("disabled");
    closeSellOrderScreen.removeAttr("disabled");
}

function buyButtonFunction(){
    orderDetailsPopup.show();
    buyButton.attr("disabled", "disabled");
    closeBuyOrderScreen.attr("disabled", "disabled");
}

function sellButtonFunction(){
    orderDetailsPopup.show();
    sellButton.attr("disabled", "disabled");
    closeSellOrderScreen.attr("disabled", "disabled");
}

function goBackFunction(){
    orderDetailsPopup.hide();
    buyButton.removeAttr("disabled");
    sellButton.removeAttr("disabled");
    closeBuyOrderScreen.removeAttr("disabled");
    closeSellOrderScreen.removeAttr("disabled");
}

function agreeOrderFunction(){
    orderDetailsPopup.hide();
    orderPlacingPopupLoad.show();
    setTimeout(fakeOrderSuccessAndError, 3000);
    setTimeout(hidePanelAndRemoveAttr, 6000);
}

function rowTemplateMaker(){
    let template = `
    <tr class="row">
                <td class="col s4" style="padding:5px;"><small>24,5678</small></td>
                <td class="col s4" style="padding:5px;"><small>234567</small></td>
                <td class="col s4" style="padding:5px;"><small>3.657789</small></td>
            </tr>
        `;
        return template; 
}

function fakeOrderTableMaker(){

    bidsBody.empty();
    askBody.empty();
    let template = rowTemplateMaker;
   for(let i=0;i<50;i++){
        bidsBody.append(template);
        askBody.append(template);
    }
}
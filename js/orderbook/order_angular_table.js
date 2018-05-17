(function () {
    var config = {
        apiKey: "AIzaSyDZz8XdLIZNgJYB_CLJLH_Ig7hq3YThfjw",
        authDomain: "buyucoin-28d33.firebaseapp.com",
        databaseURL: "https://buyucoin-28d33.firebaseio.com/",
        projectId: "buyucoin-28d33",
        storageBucket: "buyucoin-28d33.appspot.com",
        messagingSenderId: "853650883531"
    };

    firebase.initializeApp(config);
    var app = angular
        .module('TableModule', ['firebase'])
        .controller('tablectrl', function ($firebaseObject, $scope, $firebaseArray) {

            
            let coin = '_xrp';
            const rootRef = firebase.database().ref().child('market'+coin+"/data");
            const buy_orders = rootRef.child('buy_orders'); 
            const sell_orders = rootRef.child('sell_orders'); 
            const crypto = rootRef.child('crypto'); 
            const currencies = rootRef.child('currencies'); 
            const market_history = rootRef.child('market_history'); 
            const orders_complete = rootRef.child('orders_complete'); 
            const orders_pending = rootRef.child('orders_pending'); 

            $scope._buy_orders = $firebaseArray(buy_orders);
            $scope._sell_orders = $firebaseArray(sell_orders);
            $scope._crypto = $firebaseObject(crypto);
            $scope._currencies = $firebaseObject(currencies);
            $scope._market_history = $firebaseArray(market_history);
            $scope._orders_complete = $firebaseArray(orders_complete);
            $scope._orders_pending = $firebaseArray(orders_pending);
            
            console.log(currencies);



            $scope.limit = 10;
            $scope.bids_bigin = 0;
            $scope.ask_bigin = 0;
            $scope.hist_bigin = 0;
            $scope.pend_bigin = 0;
            $scope.comp_bigin = 0;

            $scope.bidsNext = function () {
                
                if($scope.bids_bigin+10 <= $scope._buy_orders.length){
                    $scope.bids_bigin = $scope.bids_bigin + 10;
                    $scope.bn = true;
                }
                else{
                    $scope.bids_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.bids_bigin);

            };
            $scope.bidsPrev = function () {
                if($scope.bids_bigin+10 >$scope._buy_orders.length){
                    $scope.bids_bigin = $scope.bids_bigin - 10;
                }
                else{
                    $scope.bids_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.bids_bigin);

            };
            $scope.askNext = function () {
                
                if($scope.ask_bigin+10 <= $scope._sell_orders.length){
                    $scope.ask_bigin = $scope.ask_bigin + 10;
                }
                else{
                    $scope.ask_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.ask_bigin);

            };
            $scope.askPrev = function () {
                if($scope.ask_bigin+10 >$scope._sell_orders.length){
                    $scope.ask_bigin = $scope.ask_bigin - 10;
                }
                else{
                    $scope.ask_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.ask_bigin);

            };

            $scope.histNext = function(){
                if($scope.hist_bigin+11 <= $scope._market_history.length){
                    $scope.hist_bigin = $scope.hist_bigin + 10;
                }
                else{
                    $scope.hist_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.hist_bigin);
            };
            $scope.histPrev = function(){
                if($scope.hist_bigin+10 >$scope._market_history.length){
                    $scope.hist_bigin = $scope.hist_bigin - 10;
                }
                else{
                    $scope.hist_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.hist_bigin);
            };
            $scope.pendNext = function(){
                if($scope.pend_bigin+11 <= $scope._orders_pending.length){
                    $scope.pend_bigin = $scope.pend_bigin + 10;
                }
                else{
                    $scope.pend_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.pend_bigin);
            };
            $scope.pendPrev = function(){
                if($scope.pend_bigin+10 >$scope._orders_pending.length){
                    $scope.pend_bigin = $scope.pend_bigin - 10;
                }
                else{
                    $scope.pend_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.pend_bigin);
            };
            $scope.compNext = function(){
                if($scope.comp_bigin+11 <= $scope._orders_complete.length){
                    $scope.comp_bigin = $scope.comp_bigin + 10;
                }
                else{
                    $scope.comp_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.comp_bigin);
            };
            $scope.compPrev = function(){
                if($scope.comp_bigin+10 >$scope._orders_complete.length){
                    $scope.comp_bigin = $scope.comp_bigin - 10;
                }
                else{
                    $scope.comp_bigin = 0;
                   
                }
                console.log($scope.limit, " -> ", $scope.comp_bigin);
            };



        });
}());
(function () {
    var config = {
        apiKey: "AIzaSyDZz8XdLIZNgJYB_CLJLH_Ig7hq3YThfjw",
        authDomain: "buyucoin-28d33.firebaseapp.com",
        databaseURL: "https://buyucoin-28d33.firebaseio.com/",
        projectId: "buyucoin-28d33",
        storageBucket: "buyucoin-28d33.appspot.com",
        messagingSenderId: "853650883531"
    };

    const arrayCon = function (getarr) {
        let x = [];
        for (i in getarr) {
            x.push(getarr[i]);
        }
        return x;
    }



    firebase.initializeApp(config);
    var app = angular
        .module('myModule', ['firebase'])
        .filter('floatMaker',function(){
            return function(val){
                return parseFloat(val);
            };
        })
        .controller('myctrl', function ($firebaseObject, $scope, $firebaseArray) {

            var start = Date.now();

            const rootRef = firebase.database().ref().child('rates/data');
            $scope.rootObject = $firebaseArray(rootRef);
            $scope.object = $scope.rootObject;
            $scope.searchText = '';

            var millis = Date.now() - start;
            console.log("seconds elapsed = " + Math.floor(millis / 1000));

            $scope.isDisabled1 = true;
            $scope.isDisabled2 = false;

            console.log($scope.object);
            $scope.sortColumn = "curr";
            $scope.reverseSort = false;

            $scope.sortData = function (column) {
                $scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
                $scope.sortColumn = column;
            }





            $scope.limit = 10;
            $scope.bigin = 0;
            $scope.objLength = 0;

            $scope.paginationNext = function (limit) {
                let offset = parseInt(limit);
                if ($scope.bigin + offset > 30) {
                    $scope.isDisabled2 = true;
                } else {
                    $scope.bigin = $scope.bigin + offset;
                    $scope.isDisabled1 = false;
                    $scope.isDisabled2 = false;
                }
                console.log($scope.limit, " -> ", $scope.bigin);

            }
            $scope.paginationPrev = function (limit) {
                let offset = parseInt(limit);
                if ($scope.bigin < offset) {
                    $scope.bigin = 0;
                    $scope.isDisabled1 = true;
                } else {
                    $scope.bigin = $scope.bigin - offset;
                    $scope.isDisabled1 = false;
                    $scope.isDisabled2 = false;
                }
                console.log($scope.limit, " -> ", $scope.bigin, offset);

            }



        });
}());
(function () {
    var config = {
        apiKey: "AIzaSyDZz8XdLIZNgJYB_CLJLH_Ig7hq3YThfjw",
        authDomain: "buyucoin-28d33.firebaseapp.com",
        databaseURL: "https://buyucoin-28d33.firebaseio.com/",
        projectId: "buyucoin-28d33",
        storageBucket: "buyucoin-28d33.appspot.com",
        messagingSenderId: "853650883531"
      };

      const arrayCon = function(getarr){
          let x = [];
          for(i in getarr){
              x.push(getarr[i]);
          }
          return x;
      }

      

    firebase.initializeApp(config);
    angular.module('app', ['firebase'])
        .controller('myctrl', function ($firebaseObject,$scope,$firebaseArray) {
            const rootRef = firebase.database().ref().child('rates');
            const ref = rootRef.child('data/crypto_array');
            $scope.rootObject = $firebaseObject(ref);
            $scope.object = $scope.rootObject;
           console.log($scope.object);

            $scope.sortColumn = "name";
            $scope.reverseSort = false;
            $scope.sortData = function(column){
                $scope.reverseSort = ( $scope.sortColumn == column ) ? !$scope.reverseSort:false;
                $scope.sortColumn = column;
            }
            $scope.limit = 5;
            $scope.bigin = 0;

            $scope.next = function(){
                $scope.bigin+=$scope.bigin+1;
                console.log($scope.bigin);

            }
            $scope.prev = function(){
                $scope.bigin-=$scope.bigin-1;
                console.log($scope.bigin);
                

            }
            

        });
}());
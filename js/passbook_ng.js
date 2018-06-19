(function(){
    let app = angular.module('passbookApp',[])
            .config(function ($httpProvider) {
                $httpProvider.defaults.headers.post['Content-Type'] =  'application/json';
            })
            .controller('passbook',function($http){
                this.name = 'vinod';
                $http.post('http://localhost/buyudash/data/dp.json').then((res)=>{
                this.dep = res;
                });
            });
})();
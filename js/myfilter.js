app.filter('changeFilter', function() {
    return function(change) {
      let c = parseFloat(change);
      if(c<0){
        return "p";
      
      }
      else{
        return "n";
      }
    };
  });
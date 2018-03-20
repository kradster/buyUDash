$(document).ready(function(){
    var oldmap;
    var map = $("#world-map");
    
        var x = map.vectorMap({
            map:'in_mill',
            backgroundColor:"#ffffff",
            regionStyle:{
                initial: {
                  fill: '#ccc',
                  "fill-opacity": 1,
                  stroke: 'none',
                  "stroke-width": 1,
                  "stroke-opacity": 1
                },
                hover: {
                  "fill-opacity": 0.8,
                  cursor: 'pointer'
                },
                selected: {
                  fill: 'blue'
                },
                selectedHover: {
                }
              },
              zoomButtons : false
              
        });    

    //var mapObj = map.vectorMap('get','mapObject');
    var mapObject = $('#world-map').vectorMap('get', 'mapObject');
    var rg = Object.keys(mapObject.regions);

    setInterval(function(){
        var rn = Math.floor(Math.random() * rg.length);
        var tempcode = rg[rn];
        //console.log(rn);

    mapObject.clearSelectedRegions();
    mapObject.setSelectedRegions(tempcode);
    //mapObject.setSelectedRegions({tempcode:false});
    
    },1000);

    

   
});
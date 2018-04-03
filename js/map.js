$(document).ready(function(){
    var oldmap;
    var map = $("#world-map");
    var map2 = $("#world-map-2");
    
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
        
        var x2 = map2.vectorMap({
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
    var mapObject2 = $('#world-map').vectorMap('get', 'mapObject');
    var rg = Object.keys(mapObject.regions);
    var rg2 = Object.keys(mapObject2.regions);

    setInterval(function(){
        var rn = Math.floor(Math.random() * rg.length);
        var rn2 = Math.floor(Math.random() * rg.length);
        var tempcode = rg[rn];
        var tempcode2 = rg2[rn2];
        //console.log(rn);

    mapObject.clearSelectedRegions();
    mapObject2.clearSelectedRegions();
    mapObject.setSelectedRegions(tempcode);
    mapObject2.setSelectedRegions(tempcode);
    //mapObject.setSelectedRegions({tempcode:false});
    
    },1000);

    

   
});
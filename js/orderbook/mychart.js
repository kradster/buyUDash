var CHART_DATA = [];
var chart;
$(document).ready(function(){
  myUpdateChart();
  
});

function myUpdateChart(){
  $.ajax({
    url:"http://127.0.0.1:5700/user_data.json",
    method:"GET",
    success:function(data){
      CHART_DATA = data;
      chart = AmCharts.makeChart( "chartdiv", {
        "type": "serial",
        "theme": "light",
        "dataDateFormat":"YYYY-MM-DD",
        "valueAxes": [ {
          "position": "left"
        } ],
        "graphs": [ {
          "id": "g1",
          "proCandlesticks": true,
          "balloonText": "Open:<b>[[open]]</b><br>Low:<b>[[low]]</b><br>High:<b>[[high]]</b><br>Close:<b>[[close]]</b><br>",
          "closeField": "close",
          "fillColors": "#7f8da9",
          "highField": "high",
          "lineColor": "#7f8da9",
          "lineAlpha": 1,
          "lowField": "low",
          "fillAlphas": 0.9,
          "negativeFillColors": "#db4c3c",
          "negativeLineColor": "#db4c3c",
          "openField": "open",
          "title": "Price:",
          "type": "candlestick",
          "valueField": "close"
        } ],
        "chartScrollbar": {
          "graph": "g1",
          "graphType": "line",
          "scrollbarHeight": 30
        },
        "chartCursor": {
          "valueLineEnabled": true,
          "valueLineBalloonEnabled": true
        },
        "categoryField": "date",
        "categoryAxis": {
          "parseDates": true
        },
        "dataProvider": CHART_DATA,
        "export": {
          "enabled": false,
          "position": "bottom-right"
        },
        "responsive": {
            "enabled": true
          }
      } );
    
      // myUpdateChart();
      
      chart.addListener( "rendered", zoomChart );
      zoomChart();
      }
  });
}

  
  // this method is called when chart is first inited as we listen for "dataUpdated" event
  function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes( chart.dataProvider.length - 50, chart.dataProvider.length - 1 );
  }

  // myUpdateChart();
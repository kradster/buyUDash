var map;
var marker;
var mymarker;
var infowindow;
var dinamic_window;
var messagewindow;
var messagewindow2;
var place_array = new Array();

var config = {
    apiKey: "AIzaSyAUMkIQ6Jc-AKXV7K3sYmglNVHoMUFy6Fw",
    authDomain: "mymap-6605d.firebaseapp.com",
    databaseURL: "https://mymap-6605d.firebaseio.com",
    projectId: "mymap-6605d",
    storageBucket: "mymap-6605d.appspot.com",
    messagingSenderId: "766399122154"
};
firebase.initializeApp(config);


var database = firebase.database();
var ref = database.ref('user');
var store_location = database.ref('locations');
var user_click_location = database.ref('userclick');
// var data = {
//     'com1':'hello',
//     'com2':'text comment',
//     'lat':(Math.random()*1000+1),
//     'lng':(Math.random()*1000+1),
//     'time':(new Date().getTime())
// }
// ref.push(data);
//console.log(ref);

function initMap() {
    var california = {
        lat: 37.4419,
        lng: -122.1419
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: california,
        zoom: 13,
        styles: [{
            featureType: 'poi',
            stylers: [{
                visibility: 'off'
            }] // Turn off points of interest.
        }, {
            featureType: 'transit.station',
            stylers: [{
                visibility: 'off'
            }] // Turn off bus stations, train stations, etc.
        }]
    });

    infowindow = new google.maps.InfoWindow({
        content: document.getElementById('form')
    });

    messagewindow = new google.maps.InfoWindow({
        content: document.getElementById('message')
    });
    messagewindow2 = new google.maps.InfoWindow({
        content: document.getElementById('message2')
    });
    dinamic_window = new google.maps.InfoWindow({
        content: document.getElementById('form')
    })

    

    user_click_location.on('value', (data) => {
        var mydata = data.val();
        var keys = Object.keys(mydata);
        for (var i = 0; i < keys.length; i++) {
            var k = keys[i];
            var lat = mydata[k].lat;
            var lng = mydata[k].lng;

            var dpos = {
                lat: lat,
                lng: lng
            }
             mymarker = new google.maps.Marker({
                position: dpos,
                map: map
            });
            (function(mymarker) {
                // Attaching a click event to the current marker
                google.maps.event.addListener(mymarker, "click", function(e) {
                 infowindow.close();
                 messagewindow2.close();
                  dinamic_window.open(map,mymarker);
                });
              
              })(mymarker, data);
        }
    }, errorFunc);


    function errorFunc(err) {
        console.log('ERROR!');
        console.log(err);

    }



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            


            marker = new google.maps.Marker({
                position: pos,
                animation: google.maps.Animation.DROP,
                map: map
            });
            messagewindow2.open(map, marker);
            // marker.addListener('click', function () {
            //     messagewindow2.close();
            //     infowindow.open(map, marker);
            //     if (marker.getAnimation() !== null) {
            //         marker.setAnimation(null);
            //     } else {
            //         marker.setAnimation(google.maps.Animation.BOUNCE);
            //         setTimeout(() => {
            //             marker.setAnimation(null);
            //         }, 2000);
            //     }
            // })



            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
    google.maps.event.addListener(map, 'click', function (event) {
        marker = new google.maps.Marker({
            position: event.latLng,
            map: map
        });

        google.maps.event.addListener(marker, 'click', function (e) {
            messagewindow2.close();
            dinamic_window.close();
            infowindow.open(map, marker);
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
                setTimeout(() => {
                    marker.setAnimation(null);
                }, 2000);
            }
        });

        
    });




}




function saveData() {
    var name = escape(document.getElementById('name').value);
    var com1 = escape(document.getElementById('com1').value);
    var com2 = document.getElementById('com2').value;
    var latLngo = marker.getPosition();
    //console.log(name, address, type, latlng.lat(), latlng.lng());
    infowindow.close();
    dinamic_window.close();
    //messagewindow.open(map, marker);
    messagewindow.open(map, mymarker);
    var userObj = {
        "name": name,
        "com1": com1,
        "com2": com2,
        "lat": latLngo.lat(),
        "lng": latLngo.lng(),
        "time": new Date().getTime()
    }
    user_click_location.push(userObj);
}
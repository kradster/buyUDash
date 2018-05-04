var map;
var marker;
var mymarker;
var infowindow;
var dinamic_window;
var messagewindow;
var messagewindow2;
var place_array = new Array();
var selectId = $('#Location-list');
var directionsService;
var directionsDisplay;
var markerArray = [];
var stepDisplay;

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
var mark_location = database.ref('markedbyuser');
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
    directionsService = new google.maps.DirectionsService;
    directionsDisplay = new google.maps.DirectionsRenderer;
    var california = {
        lat: 37.4419,
        lng: -122.1419
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: california,
        zoom: 13
    });

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('right-panel'));

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
    stepDisplay = new google.maps.InfoWindow();



    user_click_location.on('value', (data) => {
        var mydata = data.val();
        var keys = Object.keys(mydata);
        var markeIcon = 'https://firebasestorage.googleapis.com/v0/b/mymap-6605d.appspot.com/o/funny.png?alt=media&token=d334b0f8-5717-4e68-a53f-f5037adb36fe';
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
                map: map,
                icon:markeIcon
            });
            (function (mymarker) {
                // Attaching a click event to the current marker
                google.maps.event.addListener(mymarker, "click", function (e) {
                    infowindow.close();
                    messagewindow2.close();
                    dinamic_window.open(map, mymarker);
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

            sessionStorage.setItem("lat", position.coords.latitude);
            sessionStorage.setItem("lng", position.coords.longitude);




            marker = new google.maps.Marker({
                position: pos,
                animation: google.maps.Animation.DROP,
                map: map
            });
            messagewindow2.open(map, marker);




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

    var onChangeHandler = function () {
        calculateAndDisplayRoute(directionsService, directionsDisplay);
    };
    var onChangeHandler1 = function () {
        calculateAndDisplayRoute2(directionsService, directionsDisplay);
    };

    document.getElementById('Location-list').addEventListener('change', onChangeHandler);
    document.getElementById('mode').addEventListener('change', onChangeHandler1);




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

function markLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            var markObj = {
                "coord": pos,
                "time": new Date().getTime()
            }

            mark_location.push(markObj);




            map.setCenter(pos);
        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

user_click_location.on('value', addDataToUl, errorFuncition);

function addDataToUl(data) {
    selectId.empty();
    var data = data.val();
    for (i in data) {
        selectId.append("<option value='" + data[i].lat + "," + data[i].lng + "'>" + window.decodeURIComponent(data[i].com1) + "</option>");
    }
}

function errorFuncition(error) {
    console.log(error);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    var x = selectId.val();
    var a = x.split(",");

    var d1 = parseFloat(a[0]);
    var d2 = parseFloat(a[1]);

    var o1 = parseFloat(sessionStorage.getItem("lat"));
    var o2 = parseFloat(sessionStorage.getItem("lng"));

    var myOrigin = new google.maps.LatLng(o1, o2);
    var myDestination = new google.maps.LatLng(d1, d2);


    directionsService.route({
        origin: myOrigin,
        destination: myDestination,
        travelMode: 'TRANSIT'
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            console.log(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function calculateAndDisplayRoute2(directionsService, directionsDisplay) {
    var selectedMode = document.getElementById('mode').value;
    var x = selectId.val();
    var a = x.split(",");

    var d1 = parseFloat(a[0]);
    var d2 = parseFloat(a[1]);

    var o1 = parseFloat(sessionStorage.getItem("lat"));
    var o2 = parseFloat(sessionStorage.getItem("lng"));

    var myOrigin = new google.maps.LatLng(o1, o2);
    var myDestination = new google.maps.LatLng(d1, d2);
    directionsService.route({
        origin: myOrigin,
        destination: myDestination,
        travelMode: google.maps.TravelMode[selectedMode]
    }, function (response, status) {
        if (status === 'OK') {
            directionsDisplay.setDirections(response);
            //showSteps(response);
            
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}

function showSteps(directionResult) {
    // For each step, place a marker, and add the text to the marker's
    // info window. Also attach the marker to an array so we
    // can keep track of it and remove it when calculating new
    // routes.
    var myRoute = directionResult.routes[0].legs[0];

    for (var i = 0; i < myRoute.steps.length; i++) {
        var marker = new google.maps.Marker({
            position: myRoute.steps[i].start_point,
            map: map
        });
        attachInstructionText(marker, myRoute.steps[i].instructions);
        markerArray[i] = marker;
    }
}

function attachInstructionText(marker, text) {
    google.maps.event.addListener(marker, 'click', function () {
        stepDisplay.setContent(text);
        stepDisplay.open(map, marker);
    });
}
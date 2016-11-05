$(function algo() {
if (navigator.geolocation) {
        function exito(pos) {
          initMap(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
        }
        function falla(error) {
          //si falla mostrar mpara en posicion por defecto
          alert('Error en servicio Geolocalizador');
          initMap(defaultPos); 
        }

        var options = {maximumAge: 500000, enableHighAccuracy:true, timeout: 5000};
        navigator.geolocation.getCurrentPosition(exito, falla, options );
}});

function openInfoWindow(markerpos){
  var markerLatLng=markerpos.getPosition();
  console.log(markerLatLng.lat());
  console.log(markerLatLng.lng());
  infoWindow.setContent([
      '<p>Posición Propuesta</p>'
    ].join(''));
    infoWindow.open(map,markerpos);
}


function initMap(LatLng) {
   infoWindow = new google.maps.InfoWindow();

  //18.802584, -98.932822
   var map = new google.maps.Map(document.getElementById('map'), {
    center: LatLng,
    scrollwheel: false,
    zoom: 16
    });

  var defaultPos = new google.maps.LatLng(19.289168, -99.653440);

//markers
      var markerpos = new google.maps.Marker({
        position: LatLng,
        draggable:true,
        map: map,
        title: "Mi posición",
        animation: google.maps.Animation.DROP
        });
      google.maps.event.addListener(markerpos, 'click', function() {openInfoWindow(markerpos);});  
      google.maps.event.addDomListener(window,'resize',initialize);
      google.maps.event.addDomListener(window,'load',initialize);

}




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

function openInfoWindow(marker){
  var markerLatLng=marker.getPosition();
  console.log(markerLatLng.lat());
  infoWindow.setContent([
      ' nombre'
    ].join(''));
    infoWindow.open(map,marker);
 
}//markerLatLng.lat()

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

      $.getJSON('http://localhost:3000/rutas', {}, function(data) {
        console.log(JSON.stringify(data));
        $("#datos").val(JSON.stringify(data).replace("\"", "").replace("\"", ""));

          for (a in data) {
            myLatLng = {
              lat: parseFloat(data[a].latitud),
              lng: parseFloat(data[a].longitud)
            };
    
            var marker = new google.maps.Marker({
              map: map,
              position: myLatLng,
              title: 'Hello World!'
            });
            if (data[a].tipo=='1'){
            marker.setIcon('/estatico/images/ico/apple.png');
            }
            else if (data[a].tipo=='2'){
            marker.setIcon('/estatico/images/ico/globe.png');
            }
            else if (data[a].tipo=='3'){
              marker.setIcon('icons/truck.png');
            }
            else if (data[a].tipo=='4'){
              marker.setIcon('icons/house.png');
            }
            else if (data[a].tipo=='5'){
              marker.setIcon('icons/super.png');
            }
        }
      });
}




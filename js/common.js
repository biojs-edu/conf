var iconBase = 'img/google-marker.png';
var myLatlng = new google.maps.LatLng(52.621454, 1.219074);

var mapContainer = document.getElementById('map');
var mapOptions = {
  panControl: false,
  draggable: true,
  zoomControl: false,
  scrollwheel: false,
  scaleControl: false,
  center: myLatlng,
  mapTypeId: google.maps.MapTypeId.MAP,
  zoom: 5
};

var map = new google.maps.Map(mapContainer, mapOptions);

var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  icon: iconBase
});

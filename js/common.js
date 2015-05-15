$(document).ready(function(){
  var iconBase = 'img/google-marker.png';
  var myLatlng = new google.maps.LatLng(52.621454, 1.219074);

  function is_touch_device() {
    return 'ontouchstart' in window // works on most browsers 
      || 'onmsgesturechange' in window; // works on ie10
  };

  var mapContainer = document.getElementById('map');
  var mapOptions = {
    panControl: false,
    draggable: is_touch_device() ? false: true,
    zoomControl: false,
    scrollwheel: false,
    scaleControl: false,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.MAP,
    zoom: 7
  };

  var map = new google.maps.Map(mapContainer, mapOptions);

  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    icon: iconBase
  });

  //google analytics event tracking
  var navbar = document.getElementsByClassName('smoothScroll');
  console.log(navbar);
  for(var i=0; i<navbar.length; i++){
    var current = navbar[i];
    current.addEventListener('click', function(e) {  
      ga('send', 'event', {
        'eventCategory': 'ClickOnNavbar',
        'eventAction': 'click',
        'eventLabel': 'ClickOn ' + e.toElement.innerHTML
      });
    });
  }
});

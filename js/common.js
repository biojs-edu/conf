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
  var links = document.getElementsByClassName('link');
  for(var i=0; i<links.length; i++){
    links[i].addEventListener('click', function(e){
      ga('send', 'event', {
        'eventCategory': 'ClickOnLink',
        'eventAction': 'click',
        'eventLabel': 'ClickedOnLink ' + e.toElement.innerHTML
      });
    });
  }
  var speakers = document.getElementsByClassName('speaker');
  for(var i=0; i<speakers.length; i++){
    speakers[i].addEventListener('mouseover', function(e){
      var speakerName = e.toElement.parentElement.children[1].innerText.split('\n')[0];
      ga('send', 'event', {
        'eventCategory': 'MouseoverPicture',
        'eventAction': 'mouseover',
        'eventLabel': 'LookedAtPictureOf ' + speakerName
      });
    });
  }
  var registerButton = document.getElementById('reg');
  registerButton.addEventListener('click', function(){
    ga('send', 'event', {
        'eventCategory': 'ClickedRegister',
        'eventAction': 'mouseover',
        'eventLabel': 'WentToTGACRegisterPage'
      });
  });
});

// google map
window.onload = function () {
  "use strict";
  var styles = [
  {
    featureType: 'water', // set the water color
    elementType: 'geometry.fill', // apply the color only to the fill
    stylers: [
      { color: '#FFFFFF' }
    ]
  },{
    featureType: 'landscape.manmade', // set the natural landscape
    elementType: 'all',
    stylers: [
      { hue: '#27354D' }
    ]
  },{
    featureType: 'poi', // set the point of interest
    elementType: 'all',
    stylers: [
      { hue: '#0F1E39' }
    ]
  },{
    featureType: 'road', // set the road
    elementType: 'geometry',
    stylers: [
      { hue: '#0F1E39' }
    ]
  },{
    featureType: 'road.local', // set the local road
    elementType: 'all',
    stylers: [
      { hue: '#0F1E39' }
    ]
  }
];

var myLatlng = new google.maps.LatLng(10.808156, 106.716700);

var options = {
  mapTypeControlOptions: {
    mapTypeIds: ['NextStep']
  },
  center: myLatlng,
  zoom: 17,
  disableDefaultUI: false,
  scrollwheel: false,
  draggable: false,
  mapTypeId: 'NextStep'

};

var div = document.getElementById('location');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'NextStep' });
map.mapTypes.set('NextStep', styledMapType);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'NextStep'
  });

};
// end google map

// Homepage random background-color
$(document).ready(function() {
  var homeBg = ['home-1', 'home-2', 'home-3', 'home-4', 'home-5', 'home-6', 'home-7', 'home-8'];
  $('#home').css({'background': 'white ' + 'url(../images/home-bg/' + homeBg[Math.floor(Math.random() * homeBg.length)] + '.png) center center no-repeat fixed'});
})

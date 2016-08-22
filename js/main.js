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

var myLatlng = new google.maps.LatLng(10.794519, 106.702320);

var options = {
  mapTypeControlOptions: {
    mapTypeIds: ['Styled']
  },
  center: myLatlng,
  zoom: 17,
  disableDefaultUI: false,
  scrollwheel: false,
  mapTypeId: 'Styled'

};

var div = document.getElementById('location');
var map = new google.maps.Map(div, options);
var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });
map.mapTypes.set('Styled', styledMapType);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'NEX'
  });

};
// end google map

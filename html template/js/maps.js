// JavaScript Document
var map;

function initialize() {

  // Create an array of styles.
  var styles = [{
    "featureType": "road.local",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "landscape.man_made",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "poi",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "road.highway",
    "stylers": [
      { "color": "#E04648" }
    ]
  },{
    "featureType": "road.arterial",
    "stylers": [
      { "color": "#DB4B4D" },
	  { "weight": 0.1}
    ]
  },{
    "featureType": "landscape.natural",
    "stylers": [
      { "visibility": "on" },
      { "color": "#1F1F1F" }
    ]
  },{
  },{
    "featureType": "road",
    "elementType": "labels",
    "stylers": [
      { "visibility": "off" }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      { "color": "#DB4B4D"}
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "color": "#78ACFA" }
    ]
  },{
    "featureType": "transit.station",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.country",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.locality",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.stroke",
    "stylers": [
      { "visibility": "off" }
    ]
  },{
    "featureType": "administrative.neighborhood",
    "elementType": "labels.text.fill",
    "stylers": [
      { "color": "#ffffff" }
    ]
  }
];

  // Create a new StyledMapType object, passing it the array of styles,
  // as well as the name to be displayed on the map type control.
  var styledMap = new google.maps.StyledMapType(styles,
    {name: "Styled Map"});

  // Create a map object, and include the MapTypeId to add
  // to the map type control.
  var mapOptions = {
    zoom: 10,
    center: new google.maps.LatLng(43.469864,-79.687958),
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
    },
	disableDefaultUI: true,
	scrollwheel: false,
	navigationControl: true,
	mapTypeControl: false,
	scaleControl: false,
	draggable: true
  };
  
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
	
  //Toronto Hydro	
  var tHydro = new google.maps.LatLng(43.661383,-79.382958);
  
  var office = {
    url: 'mapicons/office-building.png',
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };
  
  var marker = new google.maps.Marker({
      position: tHydro,
      map: map,
	  icon: office,
      title: 'Toronto Hydro - 14 Carlton Street'
  });
 
  google.maps.event.addListener(marker, 'click', function() {
    window.open("http://www.torontohydro.com/sites/electricsystem/Pages/foryourhome.aspx");
  });
  
  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
  
  
}

google.maps.event.addDomListener(window, 'load', initialize);
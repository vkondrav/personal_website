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
  //Home
  var Home = new google.maps.LatLng(43.447342, -79.757720);
  //McMaster University
  var McMaster = new google.maps.LatLng(43.261394,-79.920394);
  //Juravinski Hospital
  var Juravinski = new google.maps.LatLng(43.239966,-79.84531);
  //Drive Products
  var DriveProducts = new google.maps.LatLng(43.6564,-79.639145);
  
  //office symbol
  var office = {
    url: 'mapicons/office-building.png',
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };

  //house symbol
  var house = {
    url: 'mapicons/house.png',
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };
  
  //university symbol
  var uni = {
    url: 'mapicons/university.png',
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };
  
  //auto symbol
  var auto = {
    url: 'mapicons/workshop.png',
    size: new google.maps.Size(32, 37),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(0, 37)
  };
  
  //hospital
  var hospital = {
    url: 'mapicons/hospital-building.png',
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
      title: 'Toronto Hydro\nSenior Technical Student'
  });

  var marker2 = new google.maps.Marker({
      position: Home,
      map: map,
      icon: house,
      title: 'Home'
  });
  
  var marker3 = new google.maps.Marker({
      position: McMaster,
      map: map,
      icon: uni,
      title: 'McMaster University\nStudent\nResearch Assistant\nTeaching Assistant'
  });
  
  var marker4 = new google.maps.Marker({
      position: DriveProducts,
      map: map,
      icon: auto,
      title: 'Drive Products\nInventory Controller'
  });
  
  var marker5 = new google.maps.Marker({
      position: Juravinski,
      map: map,
      icon: hospital,
      title: 'PEBC - Cancer Care Ontario\nDatabase Assistant'
  });

  //var lyfeCoordinates = [tHydro, Home];

  // var lyfe = new google.maps.Polyline({
  //   map: map,
  //   path: lyfeCoordinates,
  //   strokeColor: "#FF0000",
  //   strokeOpacity: 0.5,
  //   strokeWeight: 4
  // });
 
  google.maps.event.addListener(marker, 'click', function() {
    window.open("http://www.torontohydro.com/");
  });
  
  google.maps.event.addListener(marker3, 'click', function() {
    window.open("http://www.mcmaster.ca/");
  });
  
  google.maps.event.addListener(marker4, 'click', function() {
    window.open("http://www.driveproducts.com/");
  });
  
  google.maps.event.addListener(marker5, 'click', function() {
    window.open("https://www.cancercare.on.ca/about/programs/pebc/");
  });

  //Associate the styled map with the MapTypeId and set it to display.
  map.mapTypes.set('map_style', styledMap);
  map.setMapTypeId('map_style');
}

google.maps.event.addDomListener(window, 'load', initialize);
var map;

init();

function init() {

	loadMap();
	loadMarkers();
	makeMapResponsive();

	/* ++++++++++++++ LISTENERS ++++++++++++++ */

	// Slide Menus set up
	$(menuSlide('.days-btn', '.days-menu-items',300));
	$(menuSlide('.options-btn', '.options-menu-items',300));



	// Adds a marker to the map
	var marker = new google.maps.Marker({
		icon: './media/images/markers/event-marker.png',
		position: {lat:-36.8495452,lng:174.7669572},
		map: map
	});

	// Creates an Info Window and set content for it
	var info_window = new google.maps.InfoWindow();
	info_window.setContent('<b>Hi Bro!</b>');

	map.data.loadGeoJson('js/markers.json');

	// $.getJSON("js/markers.json", function(json_data) {
	// 	var icon_path, latlng;
	// 	$.each(json_data, function(key,value) {
	// 		alert(value.name);
	// 	});
 //   	// icon_path = json_data.icon;
 //   	// latlng = new google.maps.LatLng(json_data.geometry.lat, json_data.geometry.lng);

 //   	// var new_marker = new google.maps.Marker({
 //   	// 	icon: icon_path,
 //   	// 	position: latlng,
 //   	// 	map: map
 //   	// });
	// });

	/* ++++++++++++++ LISTENERS ++++++++++++++ */

	// Adds "click" event to the marker and shows Info Window
	marker.addListener('click', function() {
		info_window.open(map,this);
	});

}


/* |||||||||||||| FUNCTION DECLARATIONS |||||||||||||| */

// TOGGLE MENU ON CLICK
function menuSlide(button, navigation, slide_duration) {
	$(button).click(function(){
		$(navigation).toggle(slide_duration);
	});
}

// LOAD MAP
function loadMap() {
	// Map Options
	var map_options = {
		center: {lat:-36.8495452,lng:174.7669572},
		zoom: 15,
		scrollwheel:false
	};

	// Adds the Map with the options
	map = new google.maps.Map(document.getElementById('map'), map_options);
}

// LOAD MARKERS
function loadMarkers() {

}

// MAKE MAP RESPONSIVE
function makeMapResponsive() {
	google.maps.event.addDomListener(window,'resize', function(){
		var center = map.getCenter();
		google.maps.event.trigger(map,'resize');
		map.setCenter(center);
	});
}

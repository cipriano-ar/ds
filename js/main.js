var map;

init();

function init() {
	
	// Map Options
	var map_options = {
		center: {lat:-36.8495452,lng:174.7669572},
		zoom: 15,
		scrollwheel:false
	};

	// Adds the Map with the options
	var map_container = document.getElementById('map');
	map = new google.maps.Map(map_container, map_options);

	// Adds a marker to the map
	var marker = new google.maps.Marker({
		icon: './media/images/markers/food-marker.png',
		position: {lat:-36.8495452,lng:174.7669572},
		map: map
	});

	// Creates an Info Window and set content for it
	var info_window = new google.maps.InfoWindow();
	info_window.setContent('<b>Hi Bro!</b>');

	map.data.loadGeoJson('js/markers.json');

	/* ++++++++++++++ LISTENERS ++++++++++++++ */

	// Adds "click" event to the marker and shows Info Window
	marker.addListener('click', function() {
		info_window.open(map,this);
	});

	// keeps map centered on resize (responsive)
	google.maps.event.addDomListener(window,'resize', function(){
		var center = map.getCenter();
		google.maps.event.trigger(map,'resize');
		map.setCenter(center);
	});
	
	// Slide Menus set up
	$(menuSlide('.days-btn', '.days-menu-items',300));
	$(menuSlide('.options-btn', '.options-menu-items',300));

}

function menuSlide(button, navigation, slide_duration) {
	$(button).click(function(){
		$(navigation).toggle(slide_duration);
	});
}

// Adds markers. 'coordinates' is an array of "{lat: ,long: }" objects and 'categories' is an array of strings with any of this values: bar, event, food
// function addMarkers(coordinates, icons) {

// }
init();

var map;
var hidden;
function init() {
	
	// Map Options
	var mapOptions = {
		center: {lat:-34.397,lng:150.644},
		zoom: 11,
		scrollwheel:false,
		marker: {lat:-34.397,lng:150.644}
	};

	// Adds the Map with the options
	var map_container = document.getElementById('map');
	map = new google.maps.Map(map_container, mapOptions);

	// Adds a marker to the map
	var marker = new google.maps.Marker({
		map: map,
		position: {lat:-34.397,lng:150.644}
	});

	// Creates an Info Window and set content for it
	var info_window = new google.maps.InfoWindow();
	info_window.setContent('<b>Hi Bro!</b>');

	// Adds "click" event to the marker and shows Info Window
	marker.addListener('click', function() {
		info_window.open(map,this);
	});

	// Swaps visibility of the marker on the map
	
	// Slide Menus set up
	$(menuSlide('.days-btn', '.days-menu-items',300));
	$(menuSlide('.options-btn', '.options-menu-items',300));

}

function menuSlide(button, navigation, slide_duration) {
	$(button).click(function(){
		$(navigation).toggle(slide_duration);
	});
}
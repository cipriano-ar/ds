init();

var map;
var hidden;
function init() {
	
	var mapOptions = {
		center: {lat:-34.397,lng:150.644},
		zoom: 11,
		scrollwheel:false,
		marker: {lat:-34.397,lng:150.644}
	};
	var map_container = document.getElementById('map');
	// Adds the Map with basic options
	map = new google.maps.Map(map_container, mapOptions);

	// Adds a marker to the map
	var marker = new google.maps.Marker({
		map: map,
		position: {lat:-34.397,lng:150.644}
	});

	// Create an Info Window and set content for it
	var info_window = new google.maps.InfoWindow();
	info_window.setContent('<b>Hi Bro!</b>');

	// Adds "click" event to the marker and show Info Window
	marker.addListener('click', function() {
		info_window.open(map,this);
	});

	// Swap visibility of the marker on the map
	// var marker_btn = document.getElementsByClassName('marker-visib');
	// marker_btn.addListener('click', function() {
		
	// });

	$(menuSlide('.days-menu', '.days-menu-items',500));
	$(menuSlide('.opts-menu', '.options-menu-items',500));

}

function menuSlide(button, navigation, slide_duration) {
	$(button).click(function(){
		$(navigation).toggle(slide_duration);
	});
}
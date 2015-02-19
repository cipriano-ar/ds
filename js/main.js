var map;

init();

function init() {

	setUpSlideMenus();
	loadMap();
	loadMarkers();
	createModals();
	makeMapResponsive();
}


/* |||||||||||||| FUNCTION DECLARATIONS |||||||||||||| */

// TOGGLE MENU ON CLICK
function menuSlide(button, navigation, slide_duration) {
	$(button).click(function(){
		$(navigation).toggle(slide_duration);
	});
}

//SET UP SLIDE MENUS
function setUpSlideMenus() {
	$(menuSlide('.days-btn', '.days-menu-items',300));
	$(menuSlide('.options-btn', '.options-menu-items',300));
}

// LOAD MAP
function loadMap() {
	// Map Options
	var map_options = {
		center: {lat:-36.8495452,lng:174.7669572},
		zoom: 15,
		scrollwheel:false
	};

	// Add the Map with the options
	map = new google.maps.Map(document.getElementById('map'), map_options);
}

// LOAD MARKERS
function loadMarkers() {
	map.data.loadGeoJson('js/markers.json');
	map.data.setStyle(function(feature) {
		return {icon:feature.getProperty('icon')};
	});
}

// CREATE MODALS
function createModals() {
	map.data.addListener('click',function(event) {
		var window_content = event.feature.getProperty('description');
		var info_window = new google.maps.InfoWindow();
		info_window.setContent(window_content);
		info_window.setPosition(event.latLng);
		info_window.setOptions({pixelOffset: new google.maps.Size(0,0)});
		info_window.open(map);
	});
}

// MAKE MAP RESPONSIVE
function makeMapResponsive() {
	google.maps.event.addDomListener(window,'resize', function(){
		var center = map.getCenter();
		google.maps.event.trigger(map,'resize');
		map.setCenter(center);
	});
}

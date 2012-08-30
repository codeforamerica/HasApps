var YEARS = ["year2012", "year2013", "year2014", "year2015", "year2016", "year2017", "year2018", "year2019"]
var URL = 'https://docs.google.com/spreadsheet/pub?key=0AubZLwmQS1-YdDVyTlhDTkdRZ2dPQ1VzSi1nRnNQQXc&single=true&gid=1&output=html';



function loadSpreadsheet() {
  
  Tabletop.init( { key: URL, callback: showInfo, simpleSheet: true } )
}

function displayAddress(map, project) {
	var markerLocation = new L.LatLng(project.lat, project.long);
	setCenter(map, markerLocation)
	var marker = new L.Marker(markerLocation);
	map.addLayer(marker);
	marker.bindPopup(project.project).openPopup();
}

function loadMap() {
  var	map = new L.Map('map', {
    touchZoom: true,
    scrollWheelZoom: false,
    dragging: true});
	var cloudmade = new L.TileLayer('http://tile.stamen.com/toner/{z}/{x}/{y}.png', {
	    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
	    maxZoom: 18
	});
 map.addLayer(cloudmade);
 return map
}

function setCenter(map, markerLocation) {
	map.setView(markerLocation, 13)
}	
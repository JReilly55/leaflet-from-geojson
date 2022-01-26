var map = L.map('mapid').setView([40.76, -74.15], 13);

L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(map);

var marker1 = L.marker([40.76, -74.15]).addTo(map);
var marker2 = L.marker([40.75, -74.15]).addTo(map);
var marker3 = L.marker([40.74, -74.15]).addTo(map);

var circle = L.circle([40.76, -74.15], {
    color: 'green',
    fillColor: '#801275',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [40.76, -74.15],
    [40.75, -74.14],
    [40.74, -74.16],
    
],
    {color: 'green',
    fillColor: '#801275',
    fillOpacity: 0.5,}).addTo(map);

marker1.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
marker2.bindPopup("Nope.");
marker3.bindPopup("<b>Hello world!</b><br>I am a popup.");
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

/* Comment
var popup = L.popup()
    .setLatLng([40.76, -74.15])
    .setContent("I am a standalone popup.")
    .openOn(map);
*/

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

map.on('click', onMapClick);

var popup = L.popup();

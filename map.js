let poemMap;
poemMap = L.map("map");

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(poemMap);

poemMap.setView([40.7128, -74.0060], 16);

const timesSquare = L.marker([40.7580, -73.9855]).addTo(poemMap);

timesSquare.bindPopup("<b>Times Square</b>");

const circle = L.circle([40.7580, -73.9855], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(poemMap);

const polyline = L.polyline([
    [40.7580, -73.9855],
    [40.7486, -73.9840]
], {
    color: 'blue'
}).addTo(poemMap);

polyline.bindPopup("<b>Times Square to the Graduate Center</b>");
circle.bindPopup("I'm a circle!");

const latLng = timesSquare.getLatLng();
// console.log(latLng.lat);
// console.log(latLng.lng);

poemMap.panTo(timesSquare.getLatLng());

poemMap.on('click', function(e) {
    const latLng = e.latlng;
    console.log(latLng.lat);
    console.log(latLng.lng);
});

const palace = L.marker([40.725368, -73.944618]).addTo(poemMap);

const subwayWalk = L.polyline([
    [40.725368, -73.944618],
    [40.7255762, -73.9445793],
    [40.72551, -73.9454116],
    [40.72511,-73.9467197],
    [40.723762, -73.9505074]
], {
    color: 'green'
}).addTo(poemMap);

var bounds = [[40.725368, -73.944618], [40.723762, -73.9505074]];

// create an orange rectangle
L.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(poemMap);

// zoom the map to the rectangle bounds
poemMap.fitBounds(bounds);
var map = L.map('map').setView([51.505, -0.09], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var polygon = L.polygon([
    [51.48, -0.09],
    [51.500, -0.09],
    [51.52, -0.05],
    [51.502, -0.05]
]).addTo(map);

function getCoordinates() {
    var arrOfData = polygon.getLatLngs()[0];
    var coordinatesTable = document.getElementById("coordinates");

    arrOfData.forEach((arrOfData) =>{
        var row = coordinatesTable.insertRow();
        var cell = row.insertCell(0);
        cell.innerHTML = arrOfData.lat + "°, " + arrOfData.lng + "°";
    });
}
getCoordinates();
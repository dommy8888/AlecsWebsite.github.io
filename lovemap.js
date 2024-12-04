var map = L.map('map').setView([29.7604, -95.3698], 12); // Coordinates for Houston with zoom level 12

// Set the map tile layer (you can use a free tile service like OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a marker to Houston with a popup
var marker = L.marker([29.7604, -95.3698]).addTo(map);
marker.bindPopup('<b>Houston, TX</b><br>Welcome to the Love Map!').openPopup();
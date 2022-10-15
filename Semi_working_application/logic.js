// Set up initial map center and zoom level
var map = L.map('map').setView([33.55306, -86.81], 5);

/* Control panel to display map layers */
var controlLayers = L.control.layers( null, null, {
  position: "topright",
  collapsed: false
}).addTo(map);

// display Carto basemap tiles with light features and labels
var light = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attribution">CARTO</a>'
}).addTo(map); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(light, 'Carto Light basemap');

/* Stamen colored terrain basemap tiles with labels */
var terrain = L.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
}); // EDIT - insert or remove ".addTo(map)" before last semicolon to display by default
controlLayers.addBaseLayer(terrain, 'Stamen Terrain basemap');

// see more basemap options at https://leaflet-extras.github.io/leaflet-providers/preview/
var data = [
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 9,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 17,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 34,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 23,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 16,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 9,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 8,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 20,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 14,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 13,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 9,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 14,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 33,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 16,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 11,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 8,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 8,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 8,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 15,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 28,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 19,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 17,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 19,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 15,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 13,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 13,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 16,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 13,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 19,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 17,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 16,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 11,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 11,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 14,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 16,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 14,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 14,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 24,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 17,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 14,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 26,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 24,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 17,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 17,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 13,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 15,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 19,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 14,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 13,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 11,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 15,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 15,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 17,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 13,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 14,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 18,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 19,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 15,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 19,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 18,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 14,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 14,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 11,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 13,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 8,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 9,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 10,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 9,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 8,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 13,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 10,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 9,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 11,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.61638,
    "Longitude": -116.20382,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.05278,
    "Longitude": -88.37251,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.57862,
    "Longitude": -87.55741,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.14,
    "Longitude": -87.79923,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.81083,
    "Longitude": -86.11444,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.78793,
    "Longitude": -86.13088,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.97768,
    "Longitude": -87.59684,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.53001,
    "Longitude": -90.58761,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.11722,
    "Longitude": -94.63561,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.13179,
    "Longitude": -86.14295,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.22876,
    "Longitude": -85.65452,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.1936,
    "Longitude": -85.7119,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 8,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 30.46198,
    "Longitude": -91.17922,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 29.99601,
    "Longitude": -90.11819,
    "AQI": 19,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 46.69643,
    "Longitude": -68.03301,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.66025,
    "Longitude": -70.26897,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.37705,
    "Longitude": -68.2609,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.31083,
    "Longitude": -76.47444,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.70595,
    "Longitude": -79.012,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.14313,
    "Longitude": -76.84611,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.05528,
    "Longitude": -76.87833,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.12023,
    "Longitude": -72.5845,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.3295,
    "Longitude": -71.0826,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.32519,
    "Longitude": -71.05606,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.32519,
    "Longitude": -71.05606,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.32519,
    "Longitude": -71.05606,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.32519,
    "Longitude": -71.05606,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.32519,
    "Longitude": -71.05606,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.26396,
    "Longitude": -71.79432,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 8,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 0,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.98417,
    "Longitude": -85.67134,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.22862,
    "Longitude": -83.2082,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 8,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 11,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.386,
    "Longitude": -83.26619,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.31216,
    "Longitude": -83.09194,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.29582,
    "Longitude": -83.12943,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.28945,
    "Longitude": -83.15344,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.28307,
    "Longitude": -83.16115,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 0,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.28187,
    "Longitude": -83.15142,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 0,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.27001,
    "Longitude": -83.16259,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 45.13768,
    "Longitude": -93.20762,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.76323,
    "Longitude": -93.03255,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.77553,
    "Longitude": -93.06299,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.70612,
    "Longitude": -93.2858,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.981,
    "Longitude": -93.27372,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 8,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.96524,
    "Longitude": -93.25476,
    "AQI": 13,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 13,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.32911,
    "Longitude": -90.18272,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.04791,
    "Longitude": -94.45051,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.65643,
    "Longitude": -90.19835,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.63114,
    "Longitude": -90.28115,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.65701,
    "Longitude": -111.08962,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 46.8505,
    "Longitude": -111.98716,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.24749,
    "Longitude": -95.97314,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 9,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 9,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.25918,
    "Longitude": -96.02863,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.27059,
    "Longitude": -115.23828,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.04871,
    "Longitude": -115.05294,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.04871,
    "Longitude": -115.05294,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.04871,
    "Longitude": -115.05294,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.04871,
    "Longitude": -115.05294,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.04871,
    "Longitude": -115.05294,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 23,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 19,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 17,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.14188,
    "Longitude": -115.07874,
    "AQI": 19,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 26,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 19,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 11,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 18,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.16396,
    "Longitude": -115.11393,
    "AQI": 20,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.13971,
    "Longitude": -115.17565,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.31887,
    "Longitude": -115.58613,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 9,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 10,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.52193,
    "Longitude": -119.7954,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 11,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 15,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 15,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.54092,
    "Longitude": -119.74676,
    "AQI": 14,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.86183,
    "Longitude": -71.87863,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.86253,
    "Longitude": -71.38014,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.85355,
    "Longitude": -73.96618,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.93456,
    "Longitude": -75.12522,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.72099,
    "Longitude": -74.19289,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.73165,
    "Longitude": -74.06631,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.66244,
    "Longitude": -74.21485,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.64144,
    "Longitude": -74.20837,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.1343,
    "Longitude": -106.5852,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.01708,
    "Longitude": -106.65739,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.8679,
    "Longitude": -73.87809,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.87691,
    "Longitude": -78.80953,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.92111,
    "Longitude": -78.76583,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.14501,
    "Longitude": -77.55728,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.14618,
    "Longitude": -77.54817,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.81976,
    "Longitude": -73.94825,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.73614,
    "Longitude": -73.82153,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.73926,
    "Longitude": -73.81769,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.09142,
    "Longitude": -77.20978,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 9,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.2401,
    "Longitude": -80.78568,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.21317,
    "Longitude": -80.87408,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.85611,
    "Longitude": -78.57417,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.8652,
    "Longitude": -78.8197,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 46.82543,
    "Longitude": -100.76821,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.9679,
    "Longitude": -80.7464,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 26,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 10,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.50461,
    "Longitude": -81.69045,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.49212,
    "Longitude": -81.67845,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.44013,
    "Longitude": -81.49483,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.11107,
    "Longitude": -83.06542,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.12886,
    "Longitude": -84.50404,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.14603,
    "Longitude": -84.53838,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.33293,
    "Longitude": -80.9334,
    "AQI": 0,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.83562,
    "Longitude": -84.72052,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.75074,
    "Longitude": -94.6697,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 8,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 13,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 11,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 13,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 10,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 8,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.50307,
    "Longitude": -97.57798,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.61413,
    "Longitude": -97.47508,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.2049,
    "Longitude": -95.97654,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 45.49664,
    "Longitude": -122.60288,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 45.3935,
    "Longitude": -122.74789,
    "AQI": 9,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 0,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.92002,
    "Longitude": -77.30968,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.46542,
    "Longitude": -79.96076,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.44337,
    "Longitude": -79.99029,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 14,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 9,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.43743,
    "Longitude": -79.86357,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.30972,
    "Longitude": -78.915,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.14175,
    "Longitude": -80.03861,
    "AQI": 0,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.44278,
    "Longitude": -75.62306,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.99139,
    "Longitude": -75.08083,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.05417,
    "Longitude": -74.98517,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 7,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 9,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 39.98884,
    "Longitude": -75.20721,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 8,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 15,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.8295,
    "Longitude": -71.41746,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.84104,
    "Longitude": -71.36097,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 34.09396,
    "Longitude": -80.9623,
    "AQI": 0,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.54792,
    "Longitude": -96.70077,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.63348,
    "Longitude": -83.94161,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 7,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 36.1424,
    "Longitude": -86.7341,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.1517,
    "Longitude": -89.85025,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 35.16126,
    "Longitude": -89.87065,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 29.52943,
    "Longitude": -98.3914,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.82006,
    "Longitude": -96.86012,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 10,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 31.76829,
    "Longitude": -106.50124,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 7,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 13,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 31.76569,
    "Longitude": -106.45523,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 31.86247,
    "Longitude": -106.5473,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 10,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 8,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 29.73373,
    "Longitude": -95.25759,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 29.67003,
    "Longitude": -95.12851,
    "AQI": 8,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 14,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 9,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 6,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 8,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 8,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 11,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 7,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 16,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 29.81453,
    "Longitude": -95.38769,
    "AQI": 11,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 31.65309,
    "Longitude": -97.0707,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 7,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 5,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 32.66475,
    "Longitude": -97.33792,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 13,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 6,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 7,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 7,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 15,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 30.35386,
    "Longitude": -97.69166,
    "AQI": 15,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 17,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 27.51746,
    "Longitude": -99.51522,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 0,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.59806,
    "Longitude": -111.89417,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.73639,
    "Longitude": -111.87222,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 9,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.78422,
    "Longitude": -111.931,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.77715,
    "Longitude": -111.94585,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 0,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.66288,
    "Longitude": -111.90119,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 10,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 6,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 40.34139,
    "Longitude": -111.71361,
    "AQI": 0,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 0,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 0,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 0,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.30361,
    "Longitude": -111.98787,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.52839,
    "Longitude": -72.86884,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 6,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 5,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.4762,
    "Longitude": -73.2106,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.60806,
    "Longitude": -72.98278,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 6,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 8,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 3,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.8577,
    "Longitude": -77.05922,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 2,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 3,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 7,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.76835,
    "Longitude": -77.18347,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.55652,
    "Longitude": -77.40027,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.28342,
    "Longitude": -79.88452,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 0,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 0,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.10373,
    "Longitude": -76.38702,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 2,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 6,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 36.85555,
    "Longitude": -76.30135,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 8,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 9,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 3,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 37.59088,
    "Longitude": -77.46925,
    "AQI": 3,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 48.29786,
    "Longitude": -124.62491,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 3,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 5,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 6,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 47.59722,
    "Longitude": -122.31972,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 5,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 47.56824,
    "Longitude": -122.30863,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 6,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 3,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 38.34626,
    "Longitude": -81.62116,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.46611,
    "Longitude": -88.62111,
    "AQI": 2,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 3,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 5,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 5,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 5,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 2,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 42.93257,
    "Longitude": -87.93434,
    "AQI": 5,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 43.10128,
    "Longitude": -105.49893,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 2,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 2,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 41.18223,
    "Longitude": -104.77833,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 2,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 2,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 44.37306,
    "Longitude": -110.83083,
    "AQI": 1,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 2,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 43,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 34,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 2,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 2,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 3,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 6,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 18.42009,
    "Longitude": -66.15062,
    "AQI": 7,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 5,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 5,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 6,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 11,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 1,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 9,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 8,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 10,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 18.19871,
    "Longitude": -66.05224,
    "AQI": 10,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 18.4226,
    "Longitude": -66.12001,
    "AQI": 7,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 1,
    "Date Local": "1/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 1,
    "Date Local": "2/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 1,
    "Date Local": "3/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 1,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 3,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 3,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 5,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 3,
    "Date Local": "8/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 3,
    "Date Local": "9/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 6,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 5,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 18.00956,
    "Longitude": -66.62725,
    "AQI": 6,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 0,
    "Date Local": "4/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 2,
    "Date Local": "5/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 34,
    "Date Local": "6/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 16,
    "Date Local": "7/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 9,
    "Date Local": "10/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 7,
    "Date Local": "11/1/20"
  },
  {
    "Latitude": 18.44981,
    "Longitude": -66.05251,
    "AQI": 14,
    "Date Local": "12/1/20"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.55306,
    "Longitude": -86.815,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 1,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 0,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.48556,
    "Longitude": -86.915,
    "AQI": 7,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 1,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.52143,
    "Longitude": -86.84411,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 24,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 16,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 61.20586,
    "Longitude": -149.8246,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 14,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 64.84569,
    "Longitude": -147.72741,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 40,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 15,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 7,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 17,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.48378,
    "Longitude": -112.14256,
    "AQI": 18,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 13,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.41018,
    "Longitude": -111.86536,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 13,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.45797,
    "Longitude": -112.04659,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 16,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 13,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 8,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 9,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.40314,
    "Longitude": -112.07526,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.29896,
    "Longitude": -111.88426,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 0,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.36985,
    "Longitude": -112.62068,
    "AQI": 7,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 22,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 15,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.46173,
    "Longitude": -112.12796,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 8,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.41046,
    "Longitude": -112.00264,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 22,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.50383,
    "Longitude": -112.09577,
    "AQI": 14,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 32.20739,
    "Longitude": -110.91062,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 32.29515,
    "Longitude": -110.9823,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.75619,
    "Longitude": -92.2813,
    "AQI": 7,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.74307,
    "Longitude": -122.16994,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 16,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 10,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 10,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.81478,
    "Longitude": -122.28235,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.79362,
    "Longitude": -122.26338,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 8,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 7,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.86477,
    "Longitude": -122.30274,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 8,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.70122,
    "Longitude": -121.90302,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 39.76168,
    "Longitude": -121.84047,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.93601,
    "Longitude": -122.02615,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 7,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 13,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 11,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.00631,
    "Longitude": -121.64192,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.9604,
    "Longitude": -122.35681,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 9,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 36.78538,
    "Longitude": -119.77321,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 7,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 36.71083,
    "Longitude": -119.7775,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 36.81945,
    "Longitude": -119.71643,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 0,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 40.77678,
    "Longitude": -124.17949,
    "AQI": 5,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 32.67618,
    "Longitude": -115.48307,
    "AQI": 15,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.36068,
    "Longitude": -118.33078,
    "AQI": 1,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 35.33161,
    "Longitude": -118.99996,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 7,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.1365,
    "Longitude": -117.92391,
    "AQI": 15,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.14435,
    "Longitude": -117.85036,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 7,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.05111,
    "Longitude": -118.45636,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 9,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 8,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 8,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 17,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 8,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.06659,
    "Longitude": -118.22688,
    "AQI": 17,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.19925,
    "Longitude": -118.53276,
    "AQI": 18,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 42,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 9,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 11,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 17,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 14,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.90139,
    "Longitude": -118.205,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 13,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 8,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.01029,
    "Longitude": -118.0685,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 8,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.06703,
    "Longitude": -117.7514,
    "AQI": 13,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.1326,
    "Longitude": -118.1272,
    "AQI": 17,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.95507,
    "Longitude": -118.43049,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.38344,
    "Longitude": -118.5284,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.66974,
    "Longitude": -118.13051,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.97231,
    "Longitude": -122.52,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 10,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 0,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 0,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 0,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 1,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 36.69426,
    "Longitude": -121.62327,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.27885,
    "Longitude": -122.27502,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.83062,
    "Longitude": -117.93845,
    "AQI": 15,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 11,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 10,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 10,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 9,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 9,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 7,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 8,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 9,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 14,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 9,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.81931,
    "Longitude": -117.91876,
    "AQI": 16,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.63003,
    "Longitude": -117.67593,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 10,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 7,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.92513,
    "Longitude": -117.95264,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.85275,
    "Longitude": -116.54101,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.99958,
    "Longitude": -117.41601,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.99636,
    "Longitude": -117.4924,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.67649,
    "Longitude": -117.33098,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.61378,
    "Longitude": -121.36801,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.59332,
    "Longitude": -121.5038,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.89398,
    "Longitude": -117.0248,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 8,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 9,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.06812,
    "Longitude": -117.52579,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 10,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.51096,
    "Longitude": -117.32554,
    "AQI": 5,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.10374,
    "Longitude": -117.62914,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.10002,
    "Longitude": -117.49201,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 13,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 7,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.10668,
    "Longitude": -117.27406,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 9,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 8,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 6,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 8,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 13,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 32.98544,
    "Longitude": -117.08218,
    "AQI": 13,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 32.78957,
    "Longitude": -116.94431,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.76595,
    "Longitude": -122.39904,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 8,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 0,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.95074,
    "Longitude": -121.26852,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.48293,
    "Longitude": -122.20337,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.94287,
    "Longitude": -120.43561,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 0,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 0,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.48974,
    "Longitude": -120.04692,
    "AQI": 1,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 0,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 34.63782,
    "Longitude": -120.4575,
    "AQI": 7,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 11,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 8,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.3485,
    "Longitude": -121.8949,
    "AQI": 15,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 10,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 9,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 7,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 8,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 10,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.33814,
    "Longitude": -121.84978,
    "AQI": 14,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 13,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 11,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.10251,
    "Longitude": -122.23798,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.40377,
    "Longitude": -122.81829,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.64217,
    "Longitude": -120.99421,
    "AQI": 17,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 11,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 11,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 7,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 39.83812,
    "Longitude": -104.94984,
    "AQI": 7,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 14,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 39.75118,
    "Longitude": -104.98763,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 11,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 14,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 39.77949,
    "Longitude": -105.00518,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 10,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 18,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 9,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 6,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 7,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 10,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 9,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 39.73217,
    "Longitude": -105.0153,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 8,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 10,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 5,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.8309,
    "Longitude": -104.83924,
    "AQI": 13,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 1,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.13678,
    "Longitude": -107.62863,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 37.10258,
    "Longitude": -107.87022,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 37.10258,
    "Longitude": -107.87022,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 5,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 40.57747,
    "Longitude": -105.07892,
    "AQI": 9,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 40.38637,
    "Longitude": -104.73744,
    "AQI": 5,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 41.77144,
    "Longitude": -72.67992,
    "AQI": 8,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 1,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 41.82134,
    "Longitude": -73.29726,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 7,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 41.3014,
    "Longitude": -72.90287,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 5,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 39.73944,
    "Longitude": -75.55806,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 8,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.92185,
    "Longitude": -77.01318,
    "AQI": 18,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 10,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 5,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 9,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 38.89477,
    "Longitude": -76.95343,
    "AQI": 20,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 26.05389,
    "Longitude": -80.25694,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 5,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 8,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 8,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 9,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 9,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 26.13268,
    "Longitude": -80.16982,
    "AQI": 11,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 7,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 30.26278,
    "Longitude": -81.60683,
    "AQI": 14,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 1,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 27.95513,
    "Longitude": -82.46953,
    "AQI": 6,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 1,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 1,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 27.96565,
    "Longitude": -82.2304,
    "AQI": 5,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 25.78547,
    "Longitude": -80.28421,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 25.78547,
    "Longitude": -80.28421,
    "AQI": 1,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 5,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 25.79871,
    "Longitude": -80.21005,
    "AQI": 0,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 7,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 3,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 7,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 8,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 5,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 6,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 28.59639,
    "Longitude": -81.3625,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 1,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 3,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 27.83441,
    "Longitude": -82.66525,
    "AQI": 5,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 1,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 1,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 30.0925,
    "Longitude": -84.16111,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 5,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 6,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.6878,
    "Longitude": -84.2905,
    "AQI": 13,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 9,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 9,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 8,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 5,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 14,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 10,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 8,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 14,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 7,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 33.7784,
    "Longitude": -84.3914,
    "AQI": 10,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 0,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 0,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 0,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 3,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 3,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "8/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 1,
    "Date Local": "10/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "11/1/21"
  },
  {
    "Latitude": 21.32375,
    "Longitude": -158.08861,
    "AQI": 2,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 6,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 8,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 7,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 6,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 5,
    "Date Local": "6/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 6,
    "Date Local": "7/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 6,
    "Date Local": "9/1/21"
  },
  {
    "Latitude": 21.30758,
    "Longitude": -157.85542,
    "AQI": 3,
    "Date Local": "12/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 3,
    "Date Local": "1/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "2/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "3/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "4/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 2,
    "Date Local": "5/1/21"
  },
  {
    "Latitude": 43.6007,
    "Longitude": -116.34785,
    "AQI": 3,
    "Date Local": "6/1/21"
  }]
  var jsonFeatures = [];
                    
  data.forEach(function(point){
      var lat = point.Latitude;
      var lon = point.Longitude;
      
  
      var feature = {type: 'Feature',
          properties: point,
          geometry: {
              type: 'Point',
              coordinates: [lon,lat],
          }
      };
      jsonFeatures.push(feature);
  });

  
  var geoJson = { type: 'FeatureCollection', features: jsonFeatures };
  
  L.geoJson(geoJson).addTo(map);

  
  





map.attributionControl.setPrefix(
  'View <a href="https://github.com/HandsOnDataViz/leaflet-map-csv" target="_blank">code on GitHub</a>'
);

